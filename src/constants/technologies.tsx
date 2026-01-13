// Define the interface for a card
interface Card {
  icon: string;
  title: string;
  technologies: string[];
}

// Define the constants for the 6 cards
const cards: Card[] = [
  {
    icon: "/technologies/frontend.png",
    title: "Frontend Development",
    technologies: ["React JS", "React Native", "Vue JS", "Next JS", "Remix"],
  },
  {
    icon: "/technologies/backend.png",
    title: "Backend",
    technologies: ["Node.js", "Express", "PHP", "Nest Js"],
  },
  {
    icon: "/technologies/database.png",
    title: "Database",
    technologies: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    icon: "/technologies/framework.png",
    title: "Frameworks",
    technologies: [
      "Material UI",
      "Tailwind CSS",
      "Bootstrape",
      "ShadcnUI",
      "Adonis JS",
      "Ant Design",
    ],
  },
  {
    icon: "/technologies/designing.png",
    title: "Designing",
    technologies: ["Figma", "Illustrator", "Photoshop", "Adobe XD"],
  },
  {
    icon: "/technologies/seo.png",
    title: "SEO",
    technologies: [
      "Google Analytics",
      "Google Search Console",
      "Semrush",
      "Planner",
    ],
  },
];

export default cards;
