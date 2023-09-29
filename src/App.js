import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Discription from "./components/Discription";
import Products from "./components/Products";
import Collection from "./components/Collection";
import Mobile from "./components/Mobile";
import Feature from "./components/Feature";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Explore from "./components/Explore";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Discription />
      <Products />
      <BrowserRouter>
        <Collection />
      </BrowserRouter>
      <Mobile />
      <Feature />
      <Testimonial />
      <FAQ />
      <Contact />
      <Explore />
    </>
  );
};

export default App;
