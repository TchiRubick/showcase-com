import React from "react";
import AboutSpecs from "./AboutSpecs";
import ImageAboutUS from "./ImageAboutUS";

const AboutUS: React.FC = () => {
  return(
    <div className="flex flex-nowrap space-x-40 mx-10 mt-36">
      <div className="w-3/4 dark:text-slate-100">
        <AboutSpecs 
          title="About Us" text="Designed for living, built for life." text2="The modern architecturial design offers an open floor plan, grand views, and stylish selection of the highest quality materials and finishes. Every detail has been thoughtfully curated to maximize your experience, both inside and out.">
          Learn More
        </AboutSpecs>
      </div>
      <div className="w-full">
        <ImageAboutUS/>
      </div>
    </div>
  );
};

export default AboutUS;