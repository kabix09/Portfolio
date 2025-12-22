"use client";
import React from "react";
import { useTranslations } from 'next-intl';
import { educationData } from "@/constants/education";
import { EducationTimeline } from "@/components/Timeline/EducationTimeline";

export const Education = () => {
  const t = useTranslations();

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Nagłówek sekcji */}
      <div className="w-full text-left mb-[6rem]">
        <div className="w-[8rem] h-[4px] bg-accent rounded-full" />
      </div>

      <EducationTimeline items={educationData} />
    </div>
  );
};