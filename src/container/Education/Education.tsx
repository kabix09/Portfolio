"use client";
import React from "react";
import { useTranslations } from 'next-intl';
import { educationData } from "@/constants/education";
import { EducationTimeline } from "@/components/Timeline/EducationTimeline";

export const Education = () => {
  const t = useTranslations("sections.education");

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full text-left mb-[5rem]">
        <h2 className="text-[3.5rem] md:text-[3.5rem] font-bold">
          {t("headers.education")}
        </h2>
        <div className="w-[6rem] h-[4px] bg-accent mt-2 rounded-full" />
      </div>

      <EducationTimeline items={educationData} />
    </div>
  );
};