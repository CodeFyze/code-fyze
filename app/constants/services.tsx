// Define the interface for a card
interface Technology {
  text: string;
  link: string;
}
interface Service {
  icon: string;
  title: string;
  technologies: Technology[];
}

// Define the constants for the 6 cards
const Services: Service[] = [
  {
    icon: "/services/web.png",
    title: "WEB developement Services",
    technologies: [
      {
        text: "Frontend Developement",
        link: "#",
      },
      {
        text: "Backend Developement",
        link: "#",
      },
      {
        text: "Wordpress & Shopify",
        link: "#",
      },
    ],
  },
  {
    icon: "/services/marketing.png",
    title: "Digital Marketing",
    technologies: [
      {
        text: "SEO",
        link: "/service/seo"
      },
      {
        text: "Social Media Mangement (SMM)",
        link: "/service/socialmediamanagement"
      },
      {
        text: "Social Media Marketing",
        link: "/service/socialmediamarketing"
      },
      {
        text: "Google Ads",
        link: "/service/googleads"
      },
    ],
  },
  {
    icon: "/services/app.png",
    title: "App Developement Services",
    technologies: [
      {
        text: "Android & IOS App Developement",
        link: "#",
      },
    ],
  },
  {
    icon: "/services/graphics.png",
    title: "Graphic Design Services",
    technologies: [
      {
        text: "UI/UX Design",
        link: "#",
      },
      {
        text: "Logo Design",
        link: "#",
      },
      {
        text: "Poster Design",
        link: "#",
      },
      {
        text: "Social Media Post Design",
        link: "#",
      },
    ],
  },
];

export default Services;
