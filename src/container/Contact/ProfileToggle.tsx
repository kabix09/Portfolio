"use client";
import React, { useContext } from "react";
import { AppContext, Profile } from "@/context/AppContext";
import { motion } from "framer-motion";

export const ProfileToggle = () => {
  const context = useContext(AppContext);
  if (!context) return null;

  const { activeProfile, setActiveProfile } = context;

  const tabs: { id: Profile; label: string }[] = [
    { id: "backend", label: "Backend Developer" },
    { id: "data_analyst", label: "Data Analyst" },
  ];

  return (
    <div
      className="relative flex p-1 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg w-full"
      role="tablist"
    >
      {tabs.map((tab) => {
        const isActive = activeProfile === tab.id;

        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => setActiveProfile(tab.id)}
            className={`
              relative flex-1 py-1 text-[1.1rem] font-medium rounded-full transition-all duration-500
              ${isActive ? "text-white" : "text-gray-400 hover:text-gray-200"}
              outline-none select-none
            `}
          >
            <span className="relative z-20 tracking-wide uppercase">
              {tab.label}
            </span>

            {isActive && (
              <motion.div
                layoutId="profile-pill-enhanced"
                className="absolute inset-0 z-10 rounded-full bg-accent"
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30 
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};