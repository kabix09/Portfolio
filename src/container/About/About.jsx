"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom } from "swiper/modules";

// Style Swipera
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

const containerLeft = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
  hidden: { opacity: 0, x: -20 },
};

const containerRight = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
  hidden: { opacity: 0, x: 20 },
};

const childVariants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 20 },
};

export  const About = () => { 
  const avatars = ["/assets/aboutme/cat-images.jpeg", "/assets/aboutme/images.jpeg"];

  return (
    <section id="about" className="max-w-[800px] flex flex-col gap-[50px] md:mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-[50px] flex-wrap">
        
        {/* Lewa kolumna: Swiper */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerLeft}
          className="w-full max-w-[320px] md:max-w-[400px]"
        >
          <Swiper
            modules={[Zoom, Navigation, Pagination]}
            spaceBetween={20}
            pagination={{ clickable: true }}
            loop={true}
            zoom={{ maxRatio: 2, minRatio: 1 }}
            navigation={true}
            className="rounded-[15px] overflow-hidden"
          >
            {avatars.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-zoom-container relative aspect-square">
                  <Image 
                    src={src} 
                    alt={`About slide ${index}`} 
                    fill 
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Prawa kolumna: Opis */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerRight}
          className="flex flex-col gap-5 text-[1.5rem] leading-[1.3] text-primary flex-[2] min-w-[300px]"
        >
          <motion.p variants={childVariants}>

          </motion.p>
          <motion.p variants={childVariants}>

          </motion.p>
          <motion.p variants={childVariants}>

          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
