"use client";
import React, { useContext } from "react";
import { AppContext } from "@/context/AppContext";

import { AppBackground } from "@/components/AppBackground";
import { VerticalNavbar } from "@/components/VerticalNavbar/VerticalNavbar";
import { Navbar } from "@/components/Navbar/Navbar";

import { Contact } from "@/container/Contact/Contact";

export default function Home() {
  const context = useContext(AppContext);

  // Safety check dla TypeScripta
  if (!context) return null;

  const { showAsideContact } = context;

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* Tło z cząsteczkami */}
      <AppBackground />
      
      {/* Nawigacja górna */}
      <Navbar />
      
      {/* Warunkowe wyświetlanie bocznego panelu kontaktu i pionowego menu */}
      {showAsideContact && (
        <>
          <VerticalNavbar />
          <Contact type="aside" />
        </>
      )}

      <div className="
        flex flex-col 
        px-5 pb-5 
        xs:px-8 xs:pb-8 
        md:px-12 md:pb-12 
        xl:max-w-[950px] xl:p-0 xl:ml-[520px] xl:mr-[50px]
        2xl:ml-[600px] 2xl:mr-[150px]
        transition-all duration-300
      ">
      
      </div>
    </main>
  );
}