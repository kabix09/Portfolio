"use client";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

const containerLeft = {
  visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  hidden: { opacity: 0, x: -20 },
};

const containerRight = {
  visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
  hidden: { opacity: 0, x: 20 },
};

const childVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: 20 },
};

export const About = () => {
  const t = useTranslations("sections.about");

  return (
    <div className="w-full max-w-[85rem] flex flex-col gap-[3rem] md:gap-[4rem]">
      <div className="w-full text-left mb-[2rem]">
        <h2 className="text-[3.5rem] md:text-[3.5rem] font-bold">
          {t("headers.about")}
        </h2>
        <div className="w-[6rem] h-[4px] bg-accent mt-2 rounded-full" />
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-[4rem] md:gap-[5rem]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerRight}
          className="flex flex-col gap-6 text-[1.5rem] min-[500px]:text-[1.6rem] leading-[1.7] flex-1"
        >
          <motion.p variants={childVariants}>
            {t("description.p1")}
          </motion.p>
          <motion.p variants={childVariants}>
            {t("description.p2")}
          </motion.p>
          <motion.p variants={childVariants}>
            {t("description.p3")}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};