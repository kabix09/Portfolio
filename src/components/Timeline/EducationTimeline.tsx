"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useTranslations } from "next-intl";
import { GraduationCap } from "lucide-react";

interface TimelineItem {
  school: string;
  degree: string;
  years: string;
  description: string;
  tools: string[];
}

interface Props {
  items: TimelineItem[];
}

export const EducationTimeline = ({ items }: Props) => {
  const t = useTranslations("sections.education");
  
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 70%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative w-full flex flex-col gap-[6rem] lg:gap-[8rem]">
      
      <div className="absolute left-[2rem] lg:left-1/2 top-0 bottom-0 w-[2px] bg-primary-lighter lg:-translate-x-1/2" />

      <motion.div
        style={{ scaleY }}
        className="absolute left-[2rem] lg:left-1/2 top-0 bottom-0 w-[2px] bg-accent lg:-translate-x-1/2 origin-top z-1"
      />

      {items.map((item, index) => {
        const isEven = index % 2 === 0;

        return (
          <motion.div
            key={item.school}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`relative flex items-center lg:justify-between ${
              isEven ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <motion.div 
               className="absolute left-[2rem] lg:left-1/2 w-[1.6rem] h-[1.6rem] bg-accent rounded-full -translate-x-1/2 z-10 border-[4px] border-primary"
            >
              <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20"></div>
            </motion.div>

            <div className="hidden lg:block lg:w-[45%]" />

            <div className="w-full lg:w-[45%] pl-[5rem] lg:pl-0">
              <div className="relative group p-[3rem] bg-primary-lighter border border-white/5 rounded-[2.5rem] hover:border-accent/30 transition-all duration-300 shadow-sm">
                
                <div className="flex items-start gap-[2rem] mb-[2rem]">
                  <div className="p-[1.5rem] bg-accent/10 rounded-[1.5rem] text-accent">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-[2rem] font-bold leading-tight">
                      {t(item.school)}
                    </h3>
                    <p className="text-accent font-mono text-[1.4rem]">
                      {t(item.years)}
                    </p>
                  </div>
                </div>

                <h4 className="text-[1.7rem] font-medium mb-[1rem]">
                  {t(item.degree)}
                </h4>
                
                <p className="text-font-third text-[1.5rem] leading-[1.6] mb-[2rem]">
                  {t(item.description)}
                </p>

                <div className="flex flex-wrap gap-[1rem]">
                  {item.tools.map((toolKey) => (
                    <span 
                      key={toolKey} 
                      className="text-[1.2rem] px-[1.2rem] py-[0.4rem] bg-primary text-accent rounded-full border border-accent/20"
                    >
                      {t(toolKey)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};