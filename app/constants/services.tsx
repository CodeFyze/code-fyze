// Define the interface for a card
interface Service {
  icon: string;
  title: string;
  technologies: string[];
}

// Define the constants for the 6 cards
const Services: Service[] = [
  {
    icon: "/services/web.png",
    title: "WEB developement Services",
    technologies: [
      "Frontend Developement",
      "Backend Developement",
      "Wordpress & Shopify",
    ],
  },
  {
    icon: "/services/marketing.png",
    title: "Digital Marketing",
    technologies: [
      "SEO",
      "Social Media Mangement (SMM)",
      "Social Media Marketing",
      "Google Ads",
    ],
  },
  {
    icon: "/services/app.png",
    title: "App Developement Services",
    technologies: ["Android & IOS App Developement"],
  },
  {
    icon: "/services/graphics.png",
    title: "Graphic Design Services",
    technologies: [
      "UI/UX Design",
      "Logo Design",
      "Poster Design",
      "Social Media Post Design",
    ],
  },
];

export default Services;
