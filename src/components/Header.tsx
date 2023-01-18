import React from "react";
import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";
import ThemeToggler from "./ThemeToggler";



const Header: React.FC = () => {
  
  return (
    <div>
      <div className="flex justify-between mt-6 font-sans">
       <Link  href="/"> <p className="font-bold text-2xl flex ml-10 text-slate-800 dark:text-slate-100 ">TRIOLI</p></Link> 
        <div className="flex justify-center space-x-8 font-bold">     
        <div className="mt-1  h-0 w-0 border-y-8 border-y-transparent border-l-[6px] border-l-blue-600"></div><Link  href="/" className="text-slate-800 dark:text-slate-100">Home</Link> 
            <a href="#" className="text-slate-800 dark:text-slate-100" >Project </a>
            <a href="#" className="text-slate-800 dark:text-slate-100">Blog</a>
            <a href="#" className="text-slate-800 dark:text-slate-100">Contact Us</a>
          </div>
          <div className="flex">
          <div className="pr-10"><ThemeToggler/></div>
          <Link
              href="/letstalk" 
              className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 text-right justify-end ... mr-10 "> 
            Let&apos;s talk 
          </Link>
          </div>
      </div>
    </div>
  );
};

export default Header;