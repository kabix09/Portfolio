"use client";
import React from "react";
import { motion } from "framer-motion";
import { Pointer } from "lucide-react";

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
  const firstName = process.env.NEXT_PUBLIC_FIRSTNAME;
  const surName = process.env.NEXT_PUBLIC_SURNAME;

  return (
    <motion.div
      id="home"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-fit mx-auto justify-self-center pb-[100px] min-[800px]:pb-[200px]"
    >
      <motion.p variants={childVariants} className="text-accent mb-5 text-[2rem]">
      </motion.p>

      <motion.h1 
        variants={childVariants} 
        className="font-normal leading-[1.4] text-[4.4rem] xs:text-[6.2rem] md:text-[7.8rem] desktop:text-[8.8rem] 2xl:text-[10rem]"
      >
        {firstName} <span className="text-accent">{surName}</span>
      </motion.h1>

      <motion.h1 variants={childVariants} className="font-normal leading-[1.4] text-[2.6rem] xs:text-[3rem] md:text-[4.8rem] mb-[30px]">
        Backend Developer
      </motion.h1>

      <motion.div 
        variants={childVariants} 
        className="text-[1.5rem] xs:text-[1.6rem] text-font-third flex flex-col gap-[15px] tracking-[0.5px] max-w-[700px] line-height-[1.5]"
      >
        <p className="flex flex-wrap items-center gap-x-2">

          <a className="text-accent no-underline cursor-pointer inline-flex items-center gap-1 hover:brightness-110" href="#work">
            <Pointer size={18} className="rotate-90" />
          </a>

          <a className="text-accent no-underline cursor-pointer inline-flex items-center gap-1 hover:brightness-110" href="#skills">
            <Pointer size={18} className="rotate-90" />
          </a>.
        </p>
      </motion.div>
    </motion.div>
  );
};
