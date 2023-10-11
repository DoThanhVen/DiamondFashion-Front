import React from "react";
import  MainNavbar  from "../../page/user/Navbar";
import { Banner, Introduction,Products_home, CategoriesProduct, Sale} from "./FormHome";
import Footer from "../../page/user/Footer";


function Home() {
  return (
    <React.Fragment>
      <nav>
        <MainNavbar />
      </nav>
      <div id="best-saler">
        <Introduction />
      </div>
     
      <div>
        <CategoriesProduct/>
      </div>
      <div>
        <Products_home/>
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
