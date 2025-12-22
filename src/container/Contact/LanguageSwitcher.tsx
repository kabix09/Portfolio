"use client";
import React from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/navigation"; 
import Image from "next/image";

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const toggleLanguage = () => {
    const nextLocale = locale === "pl" ? "en" : "pl";

    router.replace(pathname, { locale: nextLocale });
  };

  const flagSrc = locale === "pl" 
    ? "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" 
    : "https://purecatamphetamine.github.io/country-flag-icons/3x2/PL.svg";

  return (
    <button 
      onClick={toggleLanguage}
      className="
        group relative 
        w-[3.5rem] h-[3.5rem] md:w-[4.2rem] md:h-[4.2rem] 
        rounded-full overflow-hidden 
        border-2 border-white/10 hover:border-accent 
        transition-all duration-300 shadow-lg 
        hover:scale-110 active:scale-95
      "
      title={locale === "pl" ? "Switch to English" : "Zmień na polski"}
    >
      <Image 
        src={flagSrc} 
        alt={locale === "pl" ? "English" : "Polski"}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="42px"
      />
      <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors" />
    </button>
  );
};