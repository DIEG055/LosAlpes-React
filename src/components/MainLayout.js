import React, {useEffect} from "react";

import "./Styles/styles.scss";
import Navbar from "../components/Navbar";

const MainLayout = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, )

  return (
    <section className="mainBackground">
     
      <Navbar></Navbar> 

      {props.children}
    </section>
  );
}

export default MainLayout;
