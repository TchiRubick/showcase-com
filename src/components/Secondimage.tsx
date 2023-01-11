import React from "react";
import desk from "../pages/image/desk.jpg";
import bed from "../pages/image/bed.jpg";
import outdoor from "../pages/image/outdoor.jpg";
import Image from 'next/image';

const Secondimage: React.FC = () => {
  
  
  return (
      <div className=" mt-20  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-0">
        <div><Image src={desk} alt="logoImage"  className="w-full h-full object-cover "/> </div>
        <div><Image src={bed} alt="logoImage"  className="w-full h-full object-cover"/></div>
        <div><Image src={outdoor} alt="logoImage"  className="w-full h-full object-cover"/></div>
      </div>

    );
};

export default Secondimage;

