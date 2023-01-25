import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const contactus: React.FC = () => {
  return(
    <div className=" dark:bg-gray-800 dark:border-gray-700 pt-10 transition duration-300">
      <Header/>
      <div className="pt-72">
      <Footer/>
      </div>
    </div>
  );
};

export default contactus;