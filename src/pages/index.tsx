import React from "react";

import type { NextPage } from "next";

import Footer from "../components/Footer"
import Example from "../components/Example";
import ExampleChild from "../components/ExampleChild";
import Header from "../components/Header";
import Bigtitle from "../components/Bigtitle";

const Home: NextPage = () => {
  return (
    <div>

      <Header/>
      <Bigtitle/>
      
      <ExampleChild title="Address">
        Element...
        Element 2 ....
      </ExampleChild>
      <ExampleChild title="Titre">
        Titre elemeny...
      </ExampleChild>
      <ExampleChild title="Titre">
        Titre elemeny...
      </ExampleChild>
      <Example title="Andy" />
      <Footer />
    </div>
  );
};

export default Home;
