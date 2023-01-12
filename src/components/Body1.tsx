import React from "react";
import Body2 from "./Body2";
import Image31 from "./Image31";

const Body1: React.FC = () => {
  return(
    <div className="flex flex-nowrap space-x-40 mx-10 mt-36">
      <div className="w-3/4">
        <Body2 title="About Us" text="Designed for living, built for life." text2="The modern architecturial design offers an open floor plan, grand views, and stylish selection of the highest quality materials and finishes. Every detail has been thoughtfully curated to maximize your experience, both inside and out.">
          Learn More
        </Body2>
      </div>
      <div className="w-full">
        <Image31/>
      </div>
    </div>
  );
};

export default Body1;