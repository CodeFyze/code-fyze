import { Metadata } from "next";
import PortfolioClient from "../../components/PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio | Top-Rated Software Development Agency | CodeFyze",
  description: "See how CodeFyze transforms ideas into high-performing digital products. View our portfolio of software solutions. Contact +971 55 265 4401.",
  robots: "index, follow",
};

export default function Portfolio() {
  const apiUrl = process.env.API_BASE_URL;

  return <PortfolioClient apiUrl={apiUrl} />;
}
