import React from "react";
import ThemeToggler from "../components/ThemeToggler";
import type { NextPage } from "next";

import Footer from "../components/Footer"
import Header from "../components/Header";
import Image4 from "../components/Image4";
import Specs from "../components/Specs"
import Bigtitle from "../components/Bigtitle";
import Firstimage from "../components/Firstimage";
import Bigtitletwo from "../components/Bigtitletwo";
import AboutUS from "../components/AboutUS";
import Textone from "../components/Textone";
import Secondimage from "../components/Secondimage";


const Dark: NextPage = () => {
    

  return (
    <div className=" dark:bg-gray-800 dark:border-gray-700 pt-10 transition duration-300">
        <div> 
      <Header/>
      <Bigtitle/>
      <Firstimage/>
      <Bigtitletwo/>
      <Textone/>
      <Secondimage/>
      <AboutUS/>
      <Specs/>
      <Image4 
        text="Trioli is not only deliver the design for our product,
        they also deliver their thinking process, alot of usability and exprerience input.
        Our conversion rate turns double! What a big impact!">
          <div className="md:flex">
           <img className="object-cover w-12 h-12 rounded-full" src="https://www.photobox.fr/blog/wp-content/uploads/sites/3/2015/11/image1.jpeg" alt="avatar" />
            <figcaption className="font-medium ml-6">
              <div className="text-white">
                <a href="#">Margeret Sherman</a>  
             </div>
              <div className="text-slate-700 dark:text-slate-800">
                <a href="#">Ceo of Square</a> 
             </div>
           </figcaption>
          </div>
      </Image4>
      <Footer />



        </div>
      </div>
    
  );
  };
  
  export default Dark;