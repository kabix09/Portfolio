"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export type Theme = "light" | "dark";
export type ColorAccent = "orange" | "yellow" | "blue" | "red" | "purple" | "green" | "pink";
export type Profile = "backend" | "data_analyst";

interface AppContextInterface {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  selectedColor: ColorAccent;
  setSelectedColor: (color: ColorAccent) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  showAsideContact: boolean;
  setShowAsideContact: (show: boolean) => void;
  activeProfile: Profile;
  setActiveProfile: (profile: Profile) => void;
}

export const AppContext = createContext<AppContextInterface | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [theme, setTheme] = useState<Theme>("dark");
  const [selectedColor, setSelectedColor] = useState<ColorAccent>("green");
  const [activeSection, setActiveSection] = useState<string>("home");
  const [showAsideContact, setShowAsideContact] = useState<boolean>(true);

  // --- LOGIKA PROFILU ZSYNCHRONIZOWANA Z URL ---
  // Odczytujemy profil z URL (?profile=data_analyst) lub ustawiamy domyślny
  const activeProfile = (searchParams.get("profile") as Profile) || "backend";

  const setActiveProfile = (profile: Profile) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("profile", profile);
    // Używamy scroll: false, aby nie skakać na górę strony przy zmianie profilu
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    const body = document.body;
    if (theme === "dark") body.classList.add("dark");
    else body.classList.remove("dark");

    const colors: ColorAccent[] = ["orange", "yellow", "blue", "red", "purple", "green", "pink"];
    colors.forEach(color => body.classList.remove(color));
    body.classList.add(selectedColor);
  }, [theme, selectedColor]);

  useEffect(() => {
    const handleResize = () => {
      setShowAsideContact(window.innerWidth >= 1200);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme, setTheme,
        selectedColor, setSelectedColor,
        activeSection, setActiveSection,
        showAsideContact, setShowAsideContact,
        activeProfile, setActiveProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};