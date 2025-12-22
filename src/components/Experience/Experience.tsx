"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { VscDebugBreakpointFunction } from "react-icons/vsc";
import { experienceData } from "@/constants/experience";

const textMotion = {
  rest: { x: 0, transition: { duration: 0.2, ease: "easeInOut" } },
  hover: { x: 10, transition: { duration: 0.2, ease: "easeInOut" } },
};

const containerVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { staggerChildren: 0.1, delayChildren: 0.1 } 
  },
};

const childVariants = {
  hidden: { opacity: 0, x: 10 },
  visible: { opacity: 1, x: 0 },
};

export const Experience = () => {
  const t = useTranslations("sections.experience");
  const [activeIndex, setActiveIndex] = useState(0);
  const activeJob = experienceData[activeIndex];

  return (
    <div className="w-full max-w-[90rem] flex flex-col items-start">
      <div className="w-full text-left mb-[5rem]">
        <h2 className="text-[3.5rem] md:text-[3.5rem] font-bold">
          {t("headers.experience")}
        </h2>
        <div className="w-[6rem] h-[4px] bg-accent mt-2 rounded-full" />
      </div>

      <div className="flex flex-col lg:flex-row w-full gap-[3rem] lg:gap-[5rem] min-h-[45rem]">

        <div className="relative flex lg:flex-col overflow-x-auto lg:overflow-visible border-b lg:border-b-0 lg:border-l border-white/10 min-w-fit">
          {experienceData.map((job, index) => (
            <button
              key={job.name}
              onClick={() => setActiveIndex(index)}
              className={`
                px-[2.5rem] py-[1.5rem] text-[1.5rem] text-left transition-all duration-300 whitespace-nowrap
                ${activeIndex === index 
                  ? "text-accent bg-accent/5 font-medium" 
                  : "text-font-third hover:text-accent hover:bg-accent/5"}
              `}
            >
              {job.employerName}
            </button>
          ))}

          <motion.div
            className="hidden lg:block absolute left-0 w-[2px] bg-accent"
            initial={false}
            animate={{ y: activeIndex * 52.5 }} // Wysokość przycisku
            style={{ height: "52.5px" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>

        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col gap-6"
            >
              <motion.div variants={childVariants}>
                <h3 className="text-[2.2rem] font-bold text-font-main leading-tight">
                  {t(`${activeJob.name}.position`)}
                  <a 
                    href={activeJob.link} 
                    target="_blank" 
                    className="text-accent ml-2 hover:underline"
                  >
                    @ {activeJob.employerName}
                  </a>
                </h3>
                <p className="text-font-third font-mono text-[1.4rem] mt-2 italic">
                  {t(`${activeJob.name}.from`)} –{" "}
                  {t(`${activeJob.name}.to`)}
                </p>
              </motion.div>

              <motion.ul className="flex flex-col gap-4 mt-4">
                {Array.from({ length: activeJob.duties }).map((_, index) => (
                  <motion.li
                    key={index}
                    variants={childVariants}
                    className="flex items-start gap-4 group"
                  >
                    <VscDebugBreakpointFunction className="text-accent mt-2 flex-shrink-0" size={18} />
                    <motion.p
                      variants={textMotion}
                      initial="rest"
                      whileHover="hover"
                      className="text-[1.5rem] text-font-third leading-[1] cursor-default"
                    >
                      {t(`${activeJob.name}.duties.duty${index + 1}`)}
                    </motion.p>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={childVariants} className="mt-8">
                <p className="text-[1.4rem] font-bold uppercase tracking-widest text-font-main mb-4 opacity-70">
                  {t("headers.usedTech")}
                </p>
                <div className="flex gap-[2rem] md:gap-[8rem]">
                  {[activeJob.techStack.column01, activeJob.techStack.column02].map((column, colIdx) => (
                    <ul key={colIdx} className="flex flex-col gap-3">
                      {column.map((tech) => (
                        <li key={tech} className="flex items-center gap-3 text-[1.4rem] text-font-third">
                          <VscDebugBreakpointFunction className="text-accent/50" size={14} />
                          {tech}
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};