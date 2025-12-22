"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { projectsData, projectCategories } from "@/constants/projects";

export const Projects = () => {
  const t = useTranslations("sections.projects");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projectsData.filter((project) => 
    activeCategory === "All" ? true : project.category === activeCategory
  );

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full text-left mb-[2rem]">
        <h2 className="text-[3.5rem] md:text-[3.5rem] font-bold">
          {t("headers.projects")}
        </h2>
        <div className="w-[6rem] h-[4px] bg-accent mt-2 rounded-full" />
      </div>

      <div className="flex flex-wrap justify-center gap-[1.5rem] mb-[3rem]">
        {projectCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`
              text-[1.5rem] font-medium px-[2.5rem] py-[0.5rem] rounded-full transition-all duration-300
              ${activeCategory === category
                ? "bg-accent text-primary shadow-lg shadow-accent/20"
                : "bg-primary-lighter text-font-third hover:text-accent hover:bg-accent/10 border border-white/5"}
            `}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="w-full flex flex-col gap-[4rem]"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              {...project}
              index={index}
            />
          ))}
        </AnimatePresence>
        
        {filteredProjects.length === 0 && (
            <p className="text-font-third text-[2rem] text-center py-[5rem]">
                No projects found in this category.
            </p>
        )}
      </motion.div>
    </div>
  );
};