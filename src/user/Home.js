import React from "react";
import { Navbar, Slogan } from "./Navbar";
import { Banner, BestSaler, ListProducts, Slider } from "./FormHome";
import Footer from "./Footer";

function Home() {
  return (
    <React.Fragment>
      <nav>
        <Navbar />
      </nav>
      <div id="slogan">
        <Slogan />
      </div>
      <div id="banner" className="row container">
        <Banner />
      </div>
      <div id="best-saler">
        <BestSaler />
      </div>
      <div id="list-products">
        <ListProducts />
      </div>
      <div id="slider">
        <Slider />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </React.Fragment>
  );
}
export default Home;
