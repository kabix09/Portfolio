import { Profile } from "@/context/AppContext";

export const smallProjectsData = {
  backend: [],
  data_analyst: [
    {
      id: "coffee_dashboard",
      title: "coffee_dashboard.title",
      category: "Power BI",
      description: "coffee_dashboard.description",
      images: [
        "/assets/projects/coffee_dashboard/dashboard.png",
        "/assets/projects/coffee_dashboard/coffee_quality.png",
        "/assets/projects/coffee_dashboard/map.png",
        "/assets/projects/coffee_dashboard/price.png"
      ],
      technologies: [
        "coffee_dashboard.tech.powerbi",
        "coffee_dashboard.tech.dax",
        "coffee_dashboard.tech.dataVisualization"
      ],
      githubLink: "https://github.com/kabix09/power-bi-portfolio/tree/master/coffee_dashboard"
    },
    {
      id: "hotel_recommender_classic",
      title: "hotel_recommender_classic.title",
      category: "Recommender System",
      description: "hotel_recommender_classic.description",
      images: [], //["/assets/projects/hotel_recommender_classic/1.jpg", "/assets/projects/hotel_recommender_classic/2.jpg"],
      technologies: [
        "hotel_recommender_classic.tech.python", 
        "hotel_recommender_classic.tech.pandas", 
        "hotel_recommender_classic.tech.numpy",
        "hotel_recommender_classic.tech.scikit"
      ],
      githubLink: "https://github.com/kabix09/NeuralNetworkHotelRecommender"
    },
    {
      id: "hotel_recommender_nn",
      title: "hotel_recommender_nn.title",
      category: "Recommender System",
      description: "hotel_recommender_nn.description",
      images: [], // ["/assets/projects/hotel_recommender_nn/1.jpg", "/assets/projects/hotel_recommender_nn/2.jpg"],
      technologies: [
        "hotel_recommender_nn.tech.python", 
        "hotel_recommender_nn.tech.pandas", 
        "hotel_recommender_nn.tech.numpy",
        "hotel_recommender_nn.tech.tensorflow"
      ],
      githubLink: "https://github.com/kabix09/HotelRecommender"
    },
    {
      id: "story_beats",
      title: "story_beats.title",
      category: "NLP Analysis",
      description: "story_beats.description",
      images: [],
      technologies: [
        "story_beats.tech.python", 
        "story_beats.tech.sklearn", 
        "story_beats.tech.nltk",
        "story_beats.tech.pandas",
        "story_beats.tech.bs4"
      ],
      githubLink: "https://github.com/kabix09/story-beats"
    },
    {
      id: "lego_analysis",
      title: "lego_analysis.title",
      category: "Data Analysis",
      description: "lego_analysis.description",
      images: [],
      technologies: [
        "lego_analysis.tech.r",
        "lego_analysis.tech.ggplot2",
        "lego_analysis.tech.dplyr",
        "lego_analysis.tech.caret",
        "lego_analysis.tech.plotly"
      ],
      githubLink: "https://github.com/kabix09/lego-data-analysis"
    },
    {
      id: "msbi_frania",
      title: "msbi_frania.title",
      category: "MSBI",
      description: "msbi_frania.description",
      images: ["/assets/projects/msbi_frania/1.png", "/assets/projects/msbi_frania/2.png"],
      technologies: [
        "msbi_frania.tech.ssis",
        "msbi_frania.tech.ssas",
        "msbi_frania.tech.ssrs",
        "msbi_frania.tech.powerbi",
        "msbi_frania.tech.mdx",
        "msbi_frania.tech.sqlserver"
      ],
      githubLink: "https://github.com/kabix09/MSBI-PowerBi"
    }
  ],
};

export const projectsData = {
  backend: [
    {
      id: "pmi",
      title: "pmi.title",
      category: "Web App",
      description: "pmi.description",
      images: ["/assets/projects/pmi/image.png"],
      technologies: [
        "pmi.tech.php", 
        "pmi.tech.laravel",
        "pmi.tech.api",
        "pmi.tech.postgres"
      ]
    },
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
  ],
  data_analyst: [
    {
      id: "symulator_rankingu_publikacji",
      title: "symulator_rankingu_publikacji.title",
      category: "Data Analysis",
      description: "symulator_rankingu_publikacji.description",
      images: [
      ],
      technologies: [
        "symulator_rankingu_publikacji.tech.python", 
        "symulator_rankingu_publikacji.tech.pandas", 
        "symulator_rankingu_publikacji.tech.numpy",
        "symulator_rankingu_publikacji.tech.nlp",
        "symulator_rankingu_publikacji.tech.vectorDb",
        "symulator_rankingu_publikacji.tech.statystyka"
      ],
      githubLink: "https://github.com/kabix09/scientometric_search_engines"
    }
  ]
};

// Unikalne kategorie do filtra
export const getProjectCategories = (profile: Profile) => {
  const profileProjects = projectsData[profile] || [];
  const categories = profileProjects.map((p) => p.category);
  return ["All", ...Array.from(new Set(categories))];
};

export const getSmallProjectCategories = (profile: Profile) => {
  const profileProjects = smallProjectsData[profile] || [];
  const categories = profileProjects.map((p) => p.category);
  return ["All", ...Array.from(new Set(categories))];
};

export const getProfileConfiguration = (profile: string) => {
  const data = projectsData[profile as keyof typeof projectsData] || [];
  const smallProjects = smallProjectsData[profile as keyof typeof smallProjectsData] || [];

  return {
    showProjects: data.length > 0,
    showSmallProjects: smallProjects.length > 0
  };
};