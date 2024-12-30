// import { motion } from "framer-motion";
// import Navbar from "~/components/Navbar";
import ServicePage from "~/components/ServicePage";
import portfolioItems from "~/constants/portfolioItems";

export default function ServiceGoogleAds() {

  return (
    <>
      <ServicePage title="Digital Marketing" description="Google Ads" constants={portfolioItems}/>
    </>
  );
}
