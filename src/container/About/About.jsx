"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom } from "swiper/modules";
import { useTranslations } from 'next-intl';

// Style Swipera
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  const t = useTranslations();
  const avatars = ["/assets/aboutme/cat-images.jpeg", "/assets/aboutme/images.jpeg"];

  return (
    <div className="w-full max-w-[85rem] flex flex-col gap-[3rem] md:gap-[4rem]">
      
      {/* WIERSZ 1: ZDJĘCIE + 2 AKAPITY */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-[4rem] md:gap-[5rem]">
        
        {/* Lewa kolumna: Swiper */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerLeft}
          className="w-full max-w-[32rem] md:max-w-[38rem] flex-shrink-0"
        >
          <Swiper
            modules={[Zoom, Navigation, Pagination]}
            spaceBetween={20}
            pagination={{ clickable: true }}
            loop={true}
            zoom={{ maxRatio: 2, minRatio: 1 }}
            navigation={true}
            className="rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            {avatars.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-zoom-container relative aspect-square">
                  <Image 
                    src={src} 
                    alt={`About slide ${index}`} 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 320px, 400px"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Prawa kolumna: 2 pierwsze akapity */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerRight}
          className="flex flex-col gap-6 text-[1.5rem] min-[500px]:text-[1.6rem] leading-[1.7] flex-1"
        >
          <motion.p variants={childVariants}>
            {t("sections.about.description.p1")}
          </motion.p>
          <motion.p variants={childVariants}>
            {t("sections.about.description.p2")}
          </motion.p>
        </motion.div>
      </div>

      {/* WIERSZ 2: TRZECI AKAPIT (PEŁNA SZEROKOŚĆ) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={childVariants}
        className="w-full text-[1.5rem] min-[500px]:text-[1.6rem] leading-[1.7]"
      >
        <p>
          {t("sections.about.description.p3")}
        </p>
      </motion.div>
    </div>
  );
};