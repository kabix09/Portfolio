import { IconType } from "react-icons";

export type Theme = "light" | "dark";
export type ColorAccent = "orange" | "yellow" | "blue" | "red" | "purple" | "green" | "pink";

export interface NavLink {
  id: number;
  label: string;
  icon: IconType;
}

export interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;
  activeSection: string | null;
  changeActiveSection: (section: string | null) => void;
  selectedColor: ColorAccent;
  changeSelectedColor: (color: ColorAccent) => void;
  showAsideContact: boolean;
  showDesktopMenu: boolean;
}

export interface TimelineItem {
  school: string;
  degree: string;
  years: string;
  description: string;
  tools: string[];
}
