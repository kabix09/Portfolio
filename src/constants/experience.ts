import { col } from "framer-motion/client";

export const experienceData = {
  backend: [
    {
      name: "x-one",
      employerName: "X-one",
      link: "https://x-one.pl/",
      duties: 5,
      techStack: {
        column01: ["PHP", "Symfony 6", "PostgreSQL", "PHPUnit"],
        column02: ["Stimulus", "Turbo", "Node.js", "Express"],
        column03: ["Docker", "Redis"],
        // Projekt i implementacja modułu reguł promocyjnych umożliwiającego definiowanie złożonych warunków promowania
        // Proces synchronizacji ofert produktów z serwisów zewnętrznych
        // Moduł uprawnień użytkowników
      },
    },
    {
      name: "contelizer",
      employerName: "Contelizer",
      link: "https://contelizer.pl",
      duties: 6,
      techStack: {
        column01: ["PHP", "Symfony", "API Platform", "PHPUnit"],
        column02: ["SQL", "JavaScript", "GitLab"],
        column03: ["Docker", "Redis", "CI/CD", "Bash"]
      },
    },
    {
      name: "cogitech",
      employerName: "Cogitech",
      link: "https://cogitech.pl",
      duties: 4,
      techStack: {
        column01: ["PHP", "Symfony", "Twig"],
        column02: ["JavaScript", "Vue (TypeScript)"],
        column03: ["Docker", "GitHub", "MySQL"],
      },
    },
  ],
  data_analyst: [],
} 