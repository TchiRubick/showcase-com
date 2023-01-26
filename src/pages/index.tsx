import React from "react";

import type { NextPage } from "next";

import Layout from "../components/Layout";
import LastBlock from "../components/LastBlock";
import Specs from "../components/Specs"
import Bigtitle from "../components/Bigtitle";
import Firstimage from "../components/Firstimage";
import Bigtitletwo from "../components/Bigtitletwo";
import AboutUS from "../components/AboutUS";
import Textone from "../components/Textone";
import Secondimage from "../components/Secondimage";



const Home: NextPage = () => {
  return (
    <div className=" dark:bg-gray-800 dark:border-gray-700 pt-10 transition duration-300">
      <Layout>
        <Bigtitle/>
        <Firstimage/>
        <Bigtitletwo/>
        <Textone/>
        <Secondimage/>
        <AboutUS/>
        <Specs/>
        <LastBlock text="Trioli is not only deliver the design for our product,
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
        </LastBlock>
      </Layout>
    </div>
  );
};

export default Home;