import React from "react";
import { string } from "zod";
import img from "../pages/image/canapes-cocktail.jpg";
import gamme from "../pages/image/gamme.jpg";
import elio from "../pages/image/elio.jpg";
import Image from 'next/image';

const Firstimage: React.FC = () => {
  
  
  return (
      <div className=" mt-20 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
      
      <Image src={img} alt="logoImage"  className="w-full h-full object-cover"/>
      <Image src={gamme} alt="logoImage"  className="w-full h-full object-cover"/>
      <Image src={elio} alt="logoImage"  className="w-full h-full object-cover"/>
      </div>

    );
};

export default Firstimage;

