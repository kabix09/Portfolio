"use client";
import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pointer } from "lucide-react";
import { useTranslations } from 'next-intl';
import { AppContext } from "@/context/AppContext";

const containerVariants = {
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
  hidden: { opacity: 0 },
};

const childVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
  hidden: { opacity: 0, y: 20 },
};

export const Header = () => {
  const t = useTranslations();
  const context = useContext(AppContext);
  const activeProfile = context?.activeProfile || "backend";
  
  const firstName = process.env.NEXT_PUBLIC_FIRSTNAME;
  const surName = process.env.NEXT_PUBLIC_SURNAME;

  const baseKey = `sections.home.${activeProfile}`;

  return (
    <motion.div
      key={activeProfile}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col items-start"
    >
      <motion.p variants={childVariants} className="text-accent mb-[2rem] text-[2rem] font-medium">
        {t(`${baseKey}.header.p1`)}
      </motion.p>

      <motion.h1 
        variants={childVariants} 
        className="font-normal leading-[1.2] text-[4.4rem] min-[500px]:text-[6.2rem] md:text-[7.8rem] desktop:text-[8.8rem] 2xl:text-[10rem] mb-[1rem]"
      >
        {firstName} <span className="text-accent">{surName}</span>
      </motion.h1>

      <motion.h2 
        key={`title-${activeProfile}`}
        variants={childVariants} 
        className="font-normal leading-[1.2] text-[2.6rem] min-[500px]:text-[3rem] md:text-[4.8rem] mb-[3rem]"
      >
        {t(`${baseKey}.role`)}
      </motion.h2>

      <motion.div 
        key={`desc-${activeProfile}`}
        variants={childVariants}
        className="text-[1.5rem] min-[500px]:text-[1.6rem] text-font-third flex flex-col gap-[1.5rem] tracking-[0.5px] max-w-[70rem] leading-[1.6]"
      >
        <p>{t(`${baseKey}.header.p2`)}</p>
      </motion.div>
    </motion.div>
  );
};