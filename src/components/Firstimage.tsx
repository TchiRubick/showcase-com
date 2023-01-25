import React from "react";
import img from "../image/canapes-cocktail.jpg";
import gamme from "../image/gamme.jpg";
import elio from "../image/elio.jpg";
import Image from 'next/image';

const Firstimage: React.FC = () => {
  
  return (
    <div className=" mt-20 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1  xl:grid-cols-3 gap-5">
      <Image className="w-full h-full object-cover"
        src={img} 
        alt="logoImage"
      />
      <Image className="w-full h-full object-cover"
        src={gamme} 
        alt="logoImage"/>
      <Image className="w-full h-full object-cover"
        src={elio} 
        alt="logoImage"  
      />
    </div>
  );
};

export default Firstimage;