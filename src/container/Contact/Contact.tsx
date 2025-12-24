"use client";
import React, { useContext } from "react";
import { RiFacebookFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ProfileToggle } from "./ProfileToggle";
import { AppContext } from "@/context/AppContext";

const container = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
  hidden: { opacity: 0, y: -20 },
};

const child = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

const buttonContainer = {
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
  hidden: { opacity: 0 },
};

const buttonChild = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 10 },
};

interface ContactProps {
  type: "aside" | "desktop" | "default";
}

export const Contact = ({ type }: ContactProps) => {
  const t = useTranslations();
  const context = useContext(AppContext);
  const activeProfile = context?.activeProfile || "backend";

  const locale = useLocale();
  
  const firstName = process.env.NEXT_PUBLIC_FIRSTNAME;
  const surName = process.env.NEXT_PUBLIC_SURNAME;

  const baseKey = `sections.home.${activeProfile}`;

  return (
    <motion.div
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`
        flex flex-col items-start justify-between gap-[30px] rounded-[50px] transition-all duration-300
        ${type === "aside" 
          ? "fixed left-[40px] top-[var(--top-padding)] h-[85%] w-[406px] z-[1] p-[30px_55px_30px_35px] bg-primary-lighter shadow-xl" 
          : "relative w-full p-[30px_0] mt-[30px] border-none"}
        min-h-[365px]
      `}
    >
      {type === "aside" ? (
        <motion.div variants={container} className="flex flex-col gap-[5px] text-[2rem]">
          <motion.h2 variants={child} className="font-bold text-font-main">
            {firstName} {surName}
          </motion.h2>
          <motion.p variants={child} className="text-[1.6rem] text-accent font-medium">
            {t(`${baseKey}.role`)}
          </motion.p>
        </motion.div>
      ) : (
        <motion.a 
          href="#contact" 
          className="flex items-center px-[15px] py-[8px] border border-accent rounded-[50px] text-accent font-bold no-underline"
        >
          {t(`nav.sections.contact`)}
        </motion.a>
      )}

      <div className="relative w-full max-w-[350px] aspect-[16/9] self-center overflow-hidden rounded-[25px] bg-primary transition-colors duration-200 shadow-inner">
        <Image
          src="/assets/profile.jpeg"
          alt="Profile photo"
          fill
          className="object-cover"
        />
      </div>

      <motion.div variants={container} className="self-stretch flex flex-col gap-[25px]">
        <motion.div variants={child} className="flex flex-row items-center justify-center text-[1.7rem] leading-[1.5] text-font-main">
          <p>
            {t(`sections.contact.location`)}: Poznań,{" "}
            <span className="text-accent font-semibold">{t(`sections.contact.relocation`)}</span>
          </p>
        </motion.div>

        <motion.div variants={child} className="flex justify-center gap-[20px]">
          {[
            { icon: RiLinkedinFill, url: process.env.NEXT_PUBLIC_LINKEDIN_URL },
            { icon: RiGithubFill, url: process.env.NEXT_PUBLIC_GITHUB_URL },
            // { icon: RiFacebookFill, url: process.env.NEXT_PUBLIC_FACEBOOK_URL },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="w-[45px] h-[45px] text-[var(--font-third)] text-[2.2rem] border border-[var(--font-third)] rounded-full flex items-center justify-center transition-all duration-300 hover:border-accent hover:text-accent hover:scale-110"
            >
              <social.icon />
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        variants={buttonContainer}
        className="flex flex-col items-stretch self-stretch gap-[15px]"
      >
        <div className="flex flex-row items-center gap-[15px] w-full">
          <motion.div className="flex-1">
            <ProfileToggle />
          </motion.div>

          <motion.div variants={buttonChild} className="flex-shrink-0">
            <LanguageSwitcher />
          </motion.div>
        </div>
      </motion.div>

      <footer className="self-center text-[var(--font-third)] text-[1.2rem] opacity-70">
        {t(`sections.contact.copyrights`)}
      </footer>
    </motion.div>
  );
};