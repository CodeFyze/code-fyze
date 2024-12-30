// import { motion } from "framer-motion";
// import Navbar from "~/components/Navbar";
import ServicePage from "~/components/ServicePage";
import portfolioItems from "~/constants/portfolioItems";

export default function ServiceSeo() {

  return (
    <>
      <ServicePage title="Digital Marketing" description="Search Engine Optimization" constants={portfolioItems}/>
    </>
  );
}
