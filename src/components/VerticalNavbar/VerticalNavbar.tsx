"use client";
import React, { useContext, useMemo } from "react";
import { AppContext } from "@/context/AppContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import { NavLink } from "@/types";
import { AiOutlineHome } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";
import { IoBriefcaseOutline, IoSchoolOutline, IoCodeSlashOutline } from "react-icons/io5";

const links: NavLink[] = [
  { id: 0, label: "home", icon: AiOutlineHome },
  { id: 1, label: "about", icon: RxPerson },
  { id: 2, label: "education", icon: IoSchoolOutline },
  { id: 3, label: "experience", icon: IoBriefcaseOutline },
  { id: 4, label: "projects", icon: IoCodeSlashOutline },
];

export const VerticalNavbar = () => {
  const context = useContext(AppContext);
  if (!context) return null;

  const { activeSection, setActiveSection } = context;

  const sectionIds = useMemo(() => links.map((l) => l.label), []);

  // Run a hook that will "push" changes to the Context
  useActiveSection(sectionIds, setActiveSection); 

  const handleScroll = (id: string) => {
    setActiveSection(id); // Update active section in context
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed left-[420px] top-1/2 -translate-y-1/2 z-[2] p-[25px_15px] block">
      {/* Tło paska */}
      <div className="absolute inset-y-0 left-0 w-[52%] bg-primary rounded-l-[25px] -z-10" />

      <ul className="list-none flex flex-col items-center gap-[30px]">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = activeSection === link.label;

          return (
            <li key={link.id} className="group relative">
              <button
                onClick={() => handleScroll(link.label)}
                className={`
                  text-[2rem] transition-all duration-300 flex items-center justify-center
                  ${isActive ? "text-accent scale-125" : "text-gray-400 hover:text-accent"}
                `}
              >
                <Icon size={24} />
              </button>
              
              {/* Tooltip */}
              <div className={`
                absolute left-full ml-4 px-2 py-2 bg-accent text-white text-xs rounded 
                opacity-0 pointer-events-none transition-opacity group-hover:opacity-100 uppercase
              `}>
                {link.label}
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};