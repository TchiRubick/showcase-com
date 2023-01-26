import React from "react";
import Body2 from "./AboutSpecs";
import ImageSpecs from "./ImageSpecs";

const Specs: React.FC = () => {
  return (  
    <div className="flex justify-between space-x-40 mt-36 mx-10">
      <div className="w-full">
        <ImageSpecs/>  
      </div>
      <div className="w-3/4 ">
        <Body2 title="Specs" text="Higher Standards, Low Impact." text2=" The modren architecturial design offres an open floor plan, grand views, and a stylish selection of the highest quality material and finishes. Every detail has been thoughtfully curated to maximize your experience, both inside and out.">
            Learn More 
        </Body2>
      </div>
    </div>
  );
};

export default Specs;