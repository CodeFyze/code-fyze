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
        link: "/service/frontend",
      },
      {
        text: "Backend Developement",
        link: "/service/backend",
      },
      {
        text: "Wordpress & Shopify",
        link: "/service/wordpress-shopify",
      },
    ],
  },
  {
    icon: "/services/marketing.png",
    title: "Digital Marketing Services",
    technologies: [
      {
        text: "SEO",
        link: "/service/seo"
      },
      {
        text: "Social Media Mangement",
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
    title: "App Developement Services ",
    technologies: [
      {
        text: "Android & IOS Development",
        link: "/service/android-ios",
      },
    ],
  },
  {
    icon: "/services/graphics.png",
    title: "Graphic Designing Services ",
    technologies: [
      {
        text: "UI/UX Design",
        link: "/service/ui-ux",
      },
      {
        text: "Logo Design",
        link: "/service/logo",
      },
      {
        text: "Poster Design",
        link: "/service/poster",
      },
      {
        text: "Social Media Post Design",
        link: "/service/social-media",
      },
    ],
  },
];

export default Services;
