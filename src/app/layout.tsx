import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import StoreProvider from "../lib/StoreProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Socials from "../components/Socials";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CodeFyze - Custom Software Development Company",
  description:
    "CodeFyze is a leading custom software development company. We deliver tailored software solutions to efficient your processes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <StoreProvider>
          <Navbar />
          {children}
          <Socials />
          <Footer />
          <ToastContainer />
        </StoreProvider>
      </body>
    </html>
  );
}
