"use client";
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { NavLink } from "@/types";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";
import { IoBriefcaseOutline, IoSchoolOutline } from "react-icons/io5";

const links: NavLink[] = [
  { id: 0, label: "home", icon: AiOutlineHome },
  { id: 1, label: "about", icon: RxPerson },
  { id: 2, label: "education", icon: IoSchoolOutline },
  { id: 4, label: "work", icon: IoBriefcaseOutline },
  { id: 5, label: "contact", icon: AiOutlineMessage },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const context = useContext(AppContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!context) return null;
  const { theme, activeSection } = context;

  return (
    <nav className={`
      fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4
      ${isScrolled ? "bg-primary/80 backdrop-blur-md shadow-lg" : "bg-transparent"}
      md:hidden /* Ukrywamy na desktopie zgodnie z Twoim App.jsx logic */
    `}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-accent font-bold text-xl uppercase tracking-widest">
          Portfolio
        </div>
        
        <button className="text-accent text-2xl p-2 focus:outline-none">
          <div className="w-6 h-0.5 bg-accent mb-1.5"></div>
          <div className="w-6 h-0.5 bg-accent mb-1.5"></div>
          <div className="w-6 h-0.5 bg-accent"></div>
        </button>
      </div>
    </nav>
  );
};