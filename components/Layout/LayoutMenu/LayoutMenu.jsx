import React from "react";
import Footer from "./Footer";
import MenuBar from "./MenuBar";

function LayoutMenu({ children }) {
  return (
    <>
      <MenuBar />
      {children}
      <Footer />
    </>
  );
}

export default LayoutMenu;
