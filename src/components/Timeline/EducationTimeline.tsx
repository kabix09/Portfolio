"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useTranslations } from "next-intl";
import { GraduationCap } from "lucide-react";
import { TimelineCard, TimelineItemType } from "./TimelineCard";

export const EducationTimeline = ({ items }: { items: TimelineItemType[] }) => {
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

      {items.map((item, index) => (
        <TimelineCard 
          key={item.school} 
          item={item} 
          index={index} 
        />
      ))}
    </div>
  );
};