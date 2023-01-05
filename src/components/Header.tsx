import React from "react";

const Header: React.FC = () => {
  
  return (
      <div>
        <div className="flex justify-between mt-6 font-sans">
          <a href="#" className="flex ml-10"> <p className="font-bold text-2xl ">TRIOU</p></a>
          <div className="flex justify-center space-x-8 font-bold">     
            <div className="mt-1  h-0 w-0 border-y-8 border-y-transparent border-l-[6px] border-l-blue-600 "></div><a href="#">Home</a>
              <a href="#">Project </a>
              <a href="#">Blog</a>
              <a href="#">Contact Us</a>
            </div>
            <button className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 text-right justify-end ... mr-10 ">Let's talk</button>
        </div>
        <h1>FIND YOUR <br/>PLACE DREAM</h1>  
        <div><img  alt="canapes" className="canapes"/></div>
      </div>

    );
};

export default Header;

