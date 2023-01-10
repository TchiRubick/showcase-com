import React from "react";
import Body2 from "./Body2";
import Image3 from "./Image3";

const Body: React.FC = () => {
  return (  
    <div className="flex flex-nowrap mx-10 flex-auto">
      <div >
        <Image3/>  
      </div>
      <div>
        <Body2 title="Specs" text="Higher Standards, Low Impact." text2=" The modren architecturial design offres an open floor plan, grand views, and a stylish selection of the highest quality material and finishes. Every detail has been thoughtfully curated to maximize your experience, both inside and out.">
            Learn More 
        </Body2>
      </div>
    </div>
  );
};

export default Body;