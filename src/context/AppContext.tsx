"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";

// Definicja dostępnych typów dla autouzupełniania
export type Theme = "light" | "dark";
export type ColorAccent = "orange" | "yellow" | "blue" | "red" | "purple" | "green" | "pink";

interface AppContextInterface {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  selectedColor: ColorAccent;
  setSelectedColor: (color: ColorAccent) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  showAsideContact: boolean;
  setShowAsideContact: (show: boolean) => void;
}

export const AppContext = createContext<AppContextInterface | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [selectedColor, setSelectedColor] = useState<ColorAccent>("green");
  const [activeSection, setActiveSection] = useState<string>("home");
  const [showAsideContact, setShowAsideContact] = useState<boolean>(true);

  useEffect(() => {
    const body = document.body;
    
    // Obsługa Dark Mode
    if (theme === "dark") {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }

    // Obsługa kolorów akcentowych
    const colors: ColorAccent[] = ["orange", "yellow", "blue", "red", "purple", "green", "pink"];
    colors.forEach(color => body.classList.remove(color));
    body.classList.add(selectedColor);

  }, [theme, selectedColor]);

  // Logika resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setShowAsideContact(false);
      } else {
        setShowAsideContact(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        selectedColor,
        setSelectedColor,
        activeSection,
        setActiveSection,
        showAsideContact,
        setShowAsideContact,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};