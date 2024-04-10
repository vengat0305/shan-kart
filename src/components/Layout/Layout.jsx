import React from "react";
import Header from "../Header/Header";
import Routers from "../../routers/Routers";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
