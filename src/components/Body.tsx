import React from "react";
import Body2 from "./Body2";
import Image3 from "./Image3";

const Body: React.FC = () => {
  return (  
    <div className="flex justify-between space-x-40 mt-36 mx-10">
      <div className="w-full">
        <Image3/>  
      </div>
      <div className="w-3/4">
        <Body2 title="Specs" text="Higher Standards, Low Impact." text2=" The modren architecturial design offres an open floor plan, grand views, and a stylish selection of the highest quality material and finishes. Every detail has been thoughtfully curated to maximize your experience, both inside and out.">
            Learn More 
        </Body2>
      </div>
    </div>
  );
};

export default Body;