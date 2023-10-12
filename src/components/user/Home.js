import React from "react";
import  MainNavbar  from "../../page/user/Navbar";
import { Banner, Introduction,Products_home, CategoriesProduct, Sale,About} from "./HomePage";
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
   
<div>
  <About/>
</div>

      <div id="footer">
        <Footer />
      </div>
    </React.Fragment>
  );
}
export default Home;
