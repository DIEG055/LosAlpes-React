import React from "react";

import "./Styles/styles.scss";
import Navbar from "../components/Navbar";

function MainLayout(props) {
  return (
    <section className="mainBackground">
      <Navbar></Navbar>
      
      {props.children}
    </section>
  );
}

export default MainLayout;
