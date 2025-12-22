"use client";
import React, { useContext } from "react";
import { AppContext } from "@/context/AppContext";

import { AppBackground } from "@/components/AppBackground";
import { VerticalNavbar } from "@/components/VerticalNavbar/VerticalNavbar";
import { Navbar } from "@/components/Navbar/Navbar";
import { Experience } from "@/components/Experience/Experience";

import { Header } from "@/container/Header/Header";
import { About } from "@/container/About/About";
import { Contact } from "@/container/Contact/Contact";
import { Education } from "@/container/Education/Education";
import { Projects } from "@/container/Projects/Projects";
import Organizations from "@/components/Organizations/Organizations";

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
        px-[2rem] pb-[2rem] 
        min-[500px]:px-[3rem] min-[500px]:pb-[3rem] 
        md:px-[5rem] md:pb-[5rem] 
        xl:ml-[52rem] xl:mr-[5rem] xl:max-w-[95rem] xl:p-0
        2xl:ml-[60rem] 2xl:mr-[8rem]
        transition-all duration-300
      ">
        <section id="home" className="min-h-screen flex items-center justify-center py-[5rem]">          
          <Header />
        </section>
        
        <section id="about" className="min-h-screen flex items-center justify-center py-[5rem]">
          <About />
        </section>
      
        <section id="education" className="min-h-screen flex flex-col items-center justify-center py-[2rem]">
          <Education />
        </section>

        <section id="experience" className="min-h-screen flex items-center justify-center py-[2rem]">
          <Experience />
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center py-[2rem]">
          <Projects />
        </section>

        <Organizations />
      </div>
    </main>
  );
}