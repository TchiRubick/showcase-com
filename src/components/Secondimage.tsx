import React from "react";
import desk from "../pages/image/desk.jpg";
import bed from "../pages/image/bed.jpg";
import outdoor from "../pages/image/outdoor.jpg";
import Image from 'next/image';

const Secondimage: React.FC = () => {
  
  
  return (
      <div className=" mt-20  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-0">
        <div className="relative text-center">
          <Image src={desk} alt="logoImage"  className="w-full h-full object-cover "/>
          <div className="absolute top-48 left-48 "><button className="w-20 h-20 rounded-full bg-blue-500  text-white  ">+</button></div>
          <div className="absolute bottom-10 left-10 text-black font-bold">Outdoor Tarrace</div> 
        </div>
        <div className="relative text-center">
          <Image src={bed} alt="logoImage"  className="w-full h-full object-cover"/>
          <div className="absolute bottom-10 left-10 text-black font-bold">Author's Landscaping</div>
        </div>
        <div className="relative text-center">
          <Image src={outdoor} alt="logoImage"  className="w-full h-full object-cover"/>
          <div className="absolute bottom-10 left-10 text-black font-bold">Enclosed Area</div>
        </div>
      </div>

    );
};

export default Secondimage;

