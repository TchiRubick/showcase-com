import React from "react";
import Menu from "./Menu";

const Footer: React.FC = () => {
  return (
    <>
      <div className="flex flex-nowrap justify-between mx-20">
        <Menu title="Address" text="Moscow street A.Pushkin">
          123009, 123012
        </Menu>
        <Menu title="Telephone" text="+88017 81247 285">
          +88016 17779 827
        </Menu>
        <Menu title="Quick Links" text="Privacy Police">
          Trems Of Service
        </Menu>
        <Menu title="Email" text="mollaimran067@gmail.com">
          triolibusinessss@gmail.com
        </Menu>
      </div>
      <div className="divider"/>
      <div className="flex flex-nowrap justify-between"> 
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
