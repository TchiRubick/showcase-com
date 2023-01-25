import React from "react";
import desk from "../image/desk.jpg";
import bed from "../image/bed.jpg";
import outdoor from "../image/outdoor.jpg";
import Image from 'next/image';

const Secondimage: React.FC = () => {
  
  
  return (
      <div className=" mt-20  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-0">
        <div className="relative text-center">
          <Image src={desk} alt="logoImage"  className="w-full h-full object-cover  "/>
          <div className="absolute top-48 left-48 "><button className="w-20 h-20 rounded-full bg-blue-500  text-white  ">+</button></div>
          <div className="absolute bottom-10 left-10 text-black font-bold dark:text-slate-100">Outdoor Tarrace</div> 
        </div>
        <div className="relative text-center">
          <Image src={bed} alt="logoImage"  className="w-full h-full object-cover"/>
          <div className="absolute bottom-10 left-10 text-black font-bold dark:text-slate-100">Author's Landscaping</div>
        </div>
        <div className="relative text-center">
          <Image src={outdoor} alt="logoImage"  className="w-full h-full object-cover"/>
          <div className="absolute bottom-10 left-10 text-black font-bold dark:text-slate-100">Enclosed Area</div>
        </div>
      </div>

    );
};

export default Secondimage;

