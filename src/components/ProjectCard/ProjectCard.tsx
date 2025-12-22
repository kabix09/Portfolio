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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative w-full flex flex-col lg:flex-row gap-[3rem] p-[3rem] bg-primary-lighter border border-white/5 rounded-[2.5rem] hover:border-accent/30 transition-all duration-300"
    >
      <div className="w-full lg:w-[45%] flex-shrink-0 flex flex-col">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation={true}
          className="rounded-[2rem] overflow-hidden shadow-lg aspect-video w-full"
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

        <div className="flex flex-wrap gap-[1rem] mt-[2rem]">
          {technologies.map((techKey) => (
            <span 
              key={techKey}
              className="text-[1.2rem] px-[1.2rem] py-[0.4rem] bg-primary/40 text-font-main rounded-[0.8rem] border border-white/5 group-hover:border-accent/20 transition-colors"
            >
              {t(techKey)}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col flex-1 justify-start">
        <div className="flex justify-between items-start mb-[1.5rem]">
          <div className="flex flex-col gap-[1rem]">
            <span className="w-fit text-accent text-[1.3rem] font-medium bg-accent/10 px-[1.2rem] py-[0.4rem] rounded-full">
              {category}
            </span>
            <h3 className="text-[2.4rem] md:text-[2.8rem] font-bold leading-tight text-font-main">
              {t(title)}
            </h3>
          </div>
          
          <div className="flex gap-[1.5rem] pt-[0.5rem]">
            {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noreferrer"
                className="text-font-third hover:text-accent transition-colors"
              >
                <Github size={22} />
              </a>
            )}
            {projectLink && (
              <a 
                href={projectLink} 
                target="_blank" 
                rel="noreferrer"
                className="text-font-third hover:text-accent transition-colors"
              >
                <ExternalLink size={22} />
              </a>
            )}
          </div>
        </div>

        <p className="text-font-third text-[1.5rem] md:text-[1.5rem] leading-[1.5] mb-[1rem]">
          {t(description)}
        </p>
      </div>
    </motion.div>
  );
};