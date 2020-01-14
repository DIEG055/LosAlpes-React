import React from "react";
import { Link } from "react-router-dom";

import "./Styles/HomeItems.scss";
import truck from "../static/images/home_options/truck.jpg";
import addCattle from "../static/images/home_options/addCattle.jpg";
import farm2 from "../static/images/home_options/farm2.jpg";
import truck2 from "../static/images/home_options/truck2.jpg";
import vaccination from "../static/images/home_options/vaccination.jpg";
import cattle from "../static/images/home_options/cattle.jpg";

const HomeItems = () => {
  return (
    <section className="home__options">
    <Link to="/trips/add">
      <div className="optionContainer">
        <div className="option">
          <img src={truck} alt="" />
          <h6>Crear Viaje</h6>
        </div>
      </div>
    </Link>
   <Link to="/cattle/add">
   <div className="optionContainer">
      <div className="option">
        <img src={addCattle} alt="" />
        <h6>Añadir Ganado</h6>
      </div>
    </div>
   </Link>
    <Link to="/home">
    <div className="optionContainer">
      <div className="option">
        <img src={farm2} alt="" />
        <h6>Finca</h6>
      </div>
    </div>  
    </Link>
     <Link to="/trips">
     <div className="optionContainer">
      <div className="option">
        <img src={truck2} alt="" />
        <h6>Ver Viajes</h6>
      </div>
    </div>
     </Link>
    <Link to="/home" >
    <div className="optionContainer">
      <div className="option">
        <img src={vaccination} alt="" />
        <h6>Vacunación</h6>
      </div>
    </div>
   </Link>
   <Link to="/cattle">
   <div className="optionContainer">
      <div className="option">
        <img src={cattle} alt="" />
        <h6>Ver Ganado</h6>
      </div>
    </div>
  </Link></section>

  );
};

export default HomeItems;
