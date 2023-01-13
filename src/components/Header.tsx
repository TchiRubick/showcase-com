import React from "react";
import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";

const Header: React.FC = () => {
  
  return (
    <div>
      <div className="flex justify-between mt-6 font-sans">
       <Link  href="/"> <p className="font-bold text-2xl flex ml-10 ">TRIOLI</p></Link> 
        <div className="flex justify-center space-x-8 font-bold">     
        <div className="mt-1  h-0 w-0 border-y-8 border-y-transparent border-l-[6px] border-l-blue-600 "></div><Link  href="/">Home</Link> 
            <a href="#">Project </a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
            <FaMoon/> 
          </div>
          <Link
              href="/letstalk" 
              className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 text-right justify-end ... mr-10 "> 
            Let&apos;s talk
          </Link>
      </div>
    </div>
  );
};

export default Header;