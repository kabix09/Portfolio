"use client";
import React, { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { NavLink } from "@/types";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
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

  return (
    <nav className="
      fixed left-[420px] top-1/2 -translate-y-1/2 z-[2] p-[25px_15px]
      block /* Polegamy na renderowaniu warunkowym w page.tsx, nie na breakpointach */
    ">
      <div className="absolute inset-y-0 left-0 w-[52%] bg-primary rounded-l-[25px] -z-10" />

      <ul className="list-none flex flex-col items-center gap-[30px]">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = activeSection === link.label;

          return (
            <li key={link.id} className="relative">
              <a
                href={`#${link.label}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(link.label);
                  document.getElementById(link.label)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`
                  text-[2rem] transition-all duration-100 uppercase font-medium
                  ${isActive ? "text-accent" : "text-[var(--font-third)] hover:text-accent"}
                `}
              >
                <Icon size={24} />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};