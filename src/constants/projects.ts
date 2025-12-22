export const projectsData = [
  {
    id: "pyrkon",
    title: "pyrkon.title",
    category: "Web App",
    description: "pyrkon.description",
    images: ["/assets/projects/pyrkon/1.jpg", "/assets/projects/pyrkon/2.jpg"],
    technologies: [
      "pyrkon.tech.php", 
      "pyrkon.tech.laravel", 
      "pyrkon.tech.postgres"
    ],
    // ... linki
  },
  {
    id: "wosp",
    title: "wosp.title",
    category: "Web App",
    description: "wosp.description",
    images: ["/assets/projects/wosp/1.jpg"],
    technologies: [
      "wosp.tech.php", 
      "wosp.tech.laravel", 
      "wosp.tech.api"
    ],
    // ... linki
  },
    {
    id: "skn",
    title: "skn.title",
    category: "Web App",
    description: "skn.description",
    images: ["/assets/projects/skn/1.jpg", "/assets/projects/skn/2.jpg"],
    technologies: [
      "skn.tech.csharp", 
      "skn.tech.vue", 
      "skn.tech.tailwind"
    ],
  }
];
// projectLink: "", // Opcjonalny link do live
// githubLink: "", // Opcjonalny link do kodu

// Unikalne kategorie do filtra
export const projectCategories = [
  "All",
  ...Array.from(new Set(projectsData.map((p) => p.category))),
];