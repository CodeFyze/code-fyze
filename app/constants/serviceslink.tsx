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
const Serviceslink: Service[] = [
  {
    icon: "/services/web.png",
    title: "Web Development Services",
    technologies: [
      {
        text: "Frontend Development",
        link: "/services/frontend-development",
      },
      {
        text: "Backend Development",
        link: "/services/backend-development",
      },
      {
        text: "Wordpress & Shopify",
        link: "/services/wordpress-shopify-development",
      },
    ],
  },
  {
    icon: "/services/marketing.png",
    title: "Digital Marketing Services",
    technologies: [
      {
        text: "SEO",
        link: "/services/seo"
      },
      {
        text: "Social Media Mangement",
        link: "/services/social-media-management"
      },
      {
        text: "Social Media Marketing",
        link: "/services/social-media-marketing"
      },
      {
        text: "Google Ads",
        link: "/services/google-ads"
      },
    ],
  },
  {
    icon: "/services/app.png",
    title: "App Development Services ",
    technologies: [
      {
        text: "Android & IOS Development",
        link: "/services/android-ios-app-development",
      },
    ],
  },
  {
    icon: "/services/graphics.png",
    title: "Graphic Designing Services ",
    technologies: [
      {
        text: "UI/UX Design",
        link: "/services/ui-ux-design",
      },
      {
        text: "Logo Design",
        link: "/services/logo-design",
      },
      {
        text: "Poster Design",
        link: "/services/poster-design",
      },
      {
        text: "Social Media Post Design",
        link: "/services/social-media-post-design",
      },
    ],
  },
];

export default Serviceslink;
