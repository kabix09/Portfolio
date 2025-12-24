"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Github, ExternalLink } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  title: string;
  category: string;
  description: string;
  images: string[];
  technologies: string[];
  projectLink?: string;
  githubLink?: string;
  index: number;
}

export const ProjectCard = ({ 
  title, category, description, images, technologies, projectLink, githubLink, index 
}: Props) => {
  const t = useTranslations("sections.projects");
  const hasImages = images && images.length > 0;

  const TechnologiesList = ({ className = "" }: { className?: string }) => (
    <div className={`flex flex-wrap gap-[0.8rem] ${className}`}>
      {technologies.map((techKey) => (
        <span 
          key={techKey}
          className="text-[1.1rem] px-[1rem] py-[0.3rem] bg-primary/40 text-font-main rounded-[0.6rem] border border-white/5 group-hover:border-accent/20 transition-colors"
        >
          {t(techKey)}
        </span>
      ))}
    </div>
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      // KLUCZOWA ZMIANA: col-span-2 dla projektów ze zdjęciami, col-span-1 dla reszty
      className={`group relative w-full flex flex-col ${
        hasImages ? "lg:flex-row lg:col-span-2" : "col-span-1"
      } gap-[2.5rem] p-[2.5rem] bg-primary-lighter border border-white/5 rounded-[2.5rem] hover:border-accent/30 transition-all duration-300`}
    >
      {hasImages && (
        <div className="w-full lg:w-[45%] flex-shrink-0 flex flex-col">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            pagination={{ clickable: true }}
            navigation={true}
            className="rounded-[1.5rem] overflow-hidden shadow-lg aspect-video w-full"
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative w-full h-full">
                  <Image 
                    src={src} 
                    alt={`${t(title)} screenshot ${idx}`} 
                    fill 
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <TechnologiesList className="mt-[1.5rem]" />
        </div>
      )}

      <div className="flex flex-col flex-1 justify-between">
        <div>
          <div className="flex justify-between items-start mb-[1.5rem]">
            <div className="flex flex-col gap-[0.8rem]">
              <span className="w-fit text-accent text-[1.1rem] font-medium bg-accent/10 px-[1rem] py-[0.2rem] rounded-full">
                {category}
              </span>
              <h3 className={`${hasImages ? "text-[2.4rem]" : "text-[2rem]"} font-bold leading-tight text-font-main`}>
                {t(title)}
              </h3>
            </div>
            
            <div className="flex gap-[1.2rem] pt-[0.5rem]">
              {githubLink && (
                <a href={githubLink} target="_blank" rel="noreferrer" className="text-font-third hover:text-accent transition-colors">
                  <Github size={20} />
                </a>
              )}
              {projectLink && (
                <a href={projectLink} target="_blank" rel="noreferrer" className="text-font-third hover:text-accent transition-colors">
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>

          <p className={`text-font-third ${hasImages ? "text-[1.5rem]" : "text-[1.4rem]"} leading-[1.6] mb-[2rem]`}>
            {t(description)}
          </p>
        </div>

        {!hasImages && <TechnologiesList />}
      </div>
    </motion.div>
  );
};