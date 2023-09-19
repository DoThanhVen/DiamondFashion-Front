import React from "react";
import { Navbar, Slogan } from "../user/Navbar";
import { Banner, Introduction, CategoriesProduct, Sale, NewProduct } from "./FormHome";
import Footer from "./Footer";
import Categories from "../admin/Categories";

function Home() {
  return (
    <React.Fragment>
      <nav>
        <Navbar />
      </nav>
      {/* <div id="slogan">
        <Slogan />
      </div> */}
      
      <div id="best-saler">
        <Introduction />
      </div>
      <div>
        <CategoriesProduct/>
      </div>
      <div>
        <NewProduct />
      </div>
      <div id="banner" >
        <Banner />
      </div>
     
      <div id="list-products">
        <Sale />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </React.Fragment>
  );
}
export default Home;
