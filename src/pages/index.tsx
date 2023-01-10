import React from "react";

import type { NextPage } from "next";

import Footer from "../components/Footer"
import Example from "../components/Example";
import ExampleChild from "../components/ExampleChild";
import Header from "../components/Header";
import Image4 from "../components/Image4";
import Body from "../components/Body"

const Home: NextPage = () => {
  return (
    <div>
      <Header/>
      <ExampleChild title="">
      </ExampleChild>
      <ExampleChild title="">
      </ExampleChild>
      <Example title="Andy" />
      <Body/>
      <Image4 text="Trioli is not only deliver the design for our product,
        they also deliver their thinking process, alot of usability and exprerience input.
        Our conversion rate turns double! What a big impact!">
        <img src="https://images.pexels.com/photos/6918317/pexels-photo-6918317.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Femme" />
      </Image4>
      <Footer />
    </div>
  );
};

export default Home;