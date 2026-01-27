"use client";
import React from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/navigation";
import { useSearchParams } from "next/navigation";

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const flagSrc = locale === "pl" 
    ? "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" 
    : "https://purecatamphetamine.github.io/country-flag-icons/3x2/PL.svg";

  const toggleLanguage = () => {
    const nextLocale = locale === "pl" ? "en" : "pl";
    
    const currentHash = window.location.hash;
    
    const currentParams = searchParams.toString();
    const queryString = currentParams ? `?${currentParams}` : "";

    router.replace(`${pathname}${queryString}${currentHash}`, { 
      locale: nextLocale,
      scroll: false 
    });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="group relative w-[50px] h-[50px] rounded-full border-2 border-accent overflow-hidden flex items-center justify-center transition-all duration-300 active:scale-90 shadow-md"
      title={locale === "pl" ? "Switch to English" : "Zmień na polski"}
    >
      <Image 
        src={flagSrc} 
        alt={locale === "pl" ? "English" : "Polski"}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="50px"
      />
      <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors" />
    </button>
  );
};