import { Metadata } from "next";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Top-Rated Software Development Agency ",
  description: "Get in touch with a top-rated software development agency, specializing in custom solutions. Contact us +971 55 265 4401 today.",
  robots: "index, follow",
};

export default function ContactUS() {
  const apiUrl = process.env.API_BASE_URL;

  return <ContactForm apiUrl={apiUrl} />;
}
