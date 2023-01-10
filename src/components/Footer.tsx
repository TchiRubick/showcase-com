import React from "react";
import Menu from "./Menu";

const Footer: React.FC = () => {
  return (
    <>
      <div className="flex flex-nowrap justify-between mx-10">
        <Menu title="Address">
          <span>123009, 123012 <br /> Moscow street A.Pushkin</span> 
        </Menu>
        <Menu title="Telephone">
          <span>+88016 17779 827 <br /> +88017 81247 285</span> 
        </Menu>
        <Menu title="Quick Links">
          <span>Trems Of Service <br /> Privacy Police</span> 
        </Menu>
        <Menu title="Email">
          <a href="#">triolibusinessss@gmail.com <br /> mollaimran067@gmail.com</a> 
        </Menu>
      </div>
      <div className="divider"/>
      <div className="flex flex-nowrap justify-between mx-10"> 
        <div>
          <img className="w-10 h-5" src="https://images.pexels.com/photos/1337388/pexels-photo-1337388.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Logo" />
        </div>
        <div className="">
          <button className="text-sm text-inherit">Back On Top</button>
        </div>
        <div className="">
          <p className="text-sm text-inherit">CopyRight 2021 By Imran Molla</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
