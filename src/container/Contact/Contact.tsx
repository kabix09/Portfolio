"use client";
import React, { useState, useContext } from "react";
import { RiFacebookFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from 'next-intl';

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
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

interface ContactProps {
  type: "aside" | "desktop" | "default";
}

export const Contact = ({ type }: ContactProps) => {
  const t = useTranslations();
  const [showResumeButtons, setShowResumeButtons] = useState(false);
  
  const firstName = process.env.NEXT_PUBLIC_FIRSTNAME
  const surName = process.env.NEXT_PUBLIC_SURNAME;

  const handleDownload = (language: "pl" | "en") => {
    const cvPath = language === "pl" ? "/assets/cv_pl.pdf" : "/assets/cv_en.pdf";
    console.log(`Downloading CV from: ${cvPath}`);
    // saveAs(cvPath, `${firstName}_${surName}_${language}.pdf`);
  };

  return (
    <motion.div
      id="contact"
      className={`
        
        flex flex-col items-start justify-between gap-[30px] rounded-[50px] transition-all duration-300
        ${type === "aside" 
          ? "fixed left-[40px] top-[var(--top-padding)] h-[85%] w-[406px] z-[1] p-[30px_55px_30px_35px] bg-primary-lighter" 
          : "relative w-full h-screen p-[30px_0] mt-[30px] border-none"}
        min-h-[365px]
      `}
    >
      {type === "aside" ? (
        <motion.div variants={container} className="flex flex-col gap-[5px] text-[2rem]">
          <motion.h2 variants={child} className="font-bold">
            {firstName} {surName}
          </motion.h2>
          <motion.p variants={child} className="text-[1.6rem] text-accent">
            Backend Developer
          </motion.p>
        </motion.div>
      ) : (
        <motion.a 
          href="#contact" 
          className="flex items-center px-[15px] py-[8px] border border-accent rounded-[50px] text-accent no-underline cursor-pointer"
        >
          {t(`nav.sections.contact`)}
        </motion.a>
      )}

      {/* Zdjęcie profilowe */}
      <div className="relative w-full max-w-[350px] aspect-[16/9] self-center overflow-hidden rounded-[25px] bg-description transition-colors duration-200 xl:max-w-[350px] max-h-[180px] min-[1150px]:max-h-[215px]">
        <Image
          src="/assets/profile.jpeg"
          alt="profile_bg"
          fill
          className="object-cover"
        />
      </div>

      {/* Kontener informacji */}
      <motion.div variants={container} className="self-stretch flex flex-wrap gap-[30px]">
        <div className="flex flex-col gap-[40px] items-center justify-evenly flex-1 min-h-[250px] xl:min-h-auto">
          {/* Lokalizacja */}
          <motion.div variants={child} className="pl-[25px] min-w-[280px] flex flex-row items-center justify-between text-[1.7rem] leading-[1.5]">
            <p>
                {t(`sections.contact.location`)}: Poznań,{" "}
              <span className="text-accent">{t(`sections.contact.relocation`)}</span>
            </p>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={child} className="flex justify-evenly gap-[30px]">
            {[
              { icon: RiLinkedinFill, url: process.env.NEXT_PUBLIC_LINKEDIN_URL },
              { icon: RiGithubFill, url: process.env.NEXT_PUBLIC_GITHUB_URL },
              { icon: RiFacebookFill, url: process.env.NEXT_PUBLIC_FACEBOOK_URL },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="w-[50px] h-[50px] text-[var(--font-third)] text-[2.4rem] border border-[var(--font-third)] rounded-full flex items-center justify-center transition-all duration-100 hover:border-accent hover:text-accent cursor-pointer"
              >
                <social.icon />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Sekcja CTA / Download */}
        <motion.div
          variants={buttonContainer}
          className="flex flex-col items-stretch flex-1 min-w-[300px] gap-[20px]"
        >
          <motion.div
            variants={buttonChild}
            className="group relative border-2 border-accent w-full rounded-[50px] text-[18px] p-[5px] uppercase bg-accent text-[var(--font-tooltip)] flex items-center justify-center cursor-pointer transition-all duration-100 hover:bg-transparent hover:text-accent min-h-[50px]"
            onMouseEnter={() => setShowResumeButtons(true)}
            onMouseLeave={() => setShowResumeButtons(false)}
          >
            {!showResumeButtons ? (
              <div className="flex items-center justify-center w-full h-full">
                {t(`sections.contact.resume`)}
              </div>
            ) : (
              <div className="flex gap-[10px] w-full">
                <button
                  onClick={() => handleDownload("pl")}
                  className="flex-1 py-[10px] rounded-[20px] text-[14px] bg-accent text-[var(--font-tooltip)] border-2 border-accent hover:bg-transparent hover:text-accent transition-all duration-100"
                >
                  {t(`sections.contact.polish`)}
                </button>
                <button
                  onClick={() => handleDownload("en")}
                  className="flex-1 py-[10px] rounded-[20px] text-[14px] bg-accent text-[var(--font-tooltip)] border-2 border-accent hover:bg-transparent hover:text-accent transition-all duration-100"
                >
                  {t(`sections.contact.english`)}
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      <footer className="self-center text-[var(--font-third)] text-[1.4rem]">
        {t(`sections.contact.copyrights`)}
      </footer>
    </motion.div>
  );
};