import React from "react";

import type { NextPage } from "next";

import Footer from "../components/Footer"
import Example from "../components/Example";
import ExampleChild from "../components/ExampleChild";
import Header from "../components/Header";
import Image4 from "../components/Image4";
import Body from "../components/Body"
import Bigtitle from "../components/Bigtitle";
import Firstimage from "../components/Firstimage";
import Bigtitletwo from "../components/Bigtitletwo";
import Body1 from "../components/Body1";


const Home: NextPage = () => {
  return (
    <div>
      <Header/>
      <Bigtitle/>
      <Firstimage/>
      <Bigtitletwo/>

      
      <ExampleChild title="Address">
        Element...
        Element 2 ....
      </ExampleChild>
      <ExampleChild title="Titre">
        Titre elemeny...
      </ExampleChild>
      <ExampleChild title="">
      </ExampleChild>
      <Example title="Andy" />
      <Body1/>
      <Body/>
      <Image4 text="Trioli is not only deliver the design for our product,
        they also deliver their thinking process, alot of usability and exprerience input.
        Our conversion rate turns double! What a big impact!">
        <img src="https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg" alt="Femme" />
      </Image4>
      <Footer />
    </div>
  );
};

export default Home;