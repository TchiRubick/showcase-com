import React from "react";
import Body2 from "./Body2";
import Image3 from "./Image3";

const Body1: React.FC = () => {
  return(
    <div className="flex flex-nowrap mx-10">
      <div>
        <Body2 title="About Us" text="Designed for living, built for life." text2="The modern architecturial design offers an open floor plan, grand views, and stylish selection of the highest quality materials and finishes. Every detail has been thoughtfully curated to maximize your experience, both inside and out.">
          Learn More
        </Body2>
      </div>
      <div>
        <Image3/>
      </div>
    </div>
  );
};

export default Body1;