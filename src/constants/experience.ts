import { col } from "framer-motion/client";

export const experienceData = {
  backend: [
    {
      name: "ideo",
      employerName: "Ideo Software",
      link: "https://www.ideo.pl/",
      duties: 3,
      techStack: {
        column01: ["PHP", "Laravel", "PostgreSQL"],
        column02: ["Vue", "Shopify"],
        column03: ["GraphQL", "SOAP"],
      },
      from: "2026-03-01",
      to: "2026-07-30",
    },
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
      from: "2025-06-01",
      to: "2026-01-31",
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
      from: "2023-09-01",
      to: "2025-04-30",
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
      from: "2022-05-01",
      to: "2023-02-28",
    },
  ],
  data_analyst: [
    {
      name: "erste",
      employerName: "Erste Bank Polska",
      link: "https://www.erste.pl/kariera",
      duties: 1,
      techStack: {
        column01: ["Python", "Power BI", "ETL"],
        column02: ["PostgreSQL", "Teradata"]
      },
      from: "2026-07-01",
      to: "Present",
    },
    {
      name: "europegaz",
      employerName: "Europegaz",
      link: "https://github.com/kabix09",
      duties: 4,
      techStack: {
        column01: ["Python", "Linear Programming", "Pandas"],
        column02: ["NumPy", "External API", "ETL"]
      },
      from: "2025-09-01",
      to: "2025-12-31",
    }
  ],
} 