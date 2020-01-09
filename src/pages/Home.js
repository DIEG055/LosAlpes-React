import React from "react";

import MainLayout from "../components/MainLayout";
import "./Styles/home.scss";

import truck from "../static/images/home_options/truck.jpg";
import addCattle from "../static/images/home_options/addCattle.jpg";
import farm2 from "../static/images/home_options/farm2.jpg";
import truck2 from "../static/images/home_options/truck2.jpg";
import vaccination from "../static/images/home_options/vaccination.jpg";
import cattle from "../static/images/home_options/cattle.jpg";

function Home(props) {
  return (
    <MainLayout>
      <section className="welcomeInfo">
        <div className="welcomeUser">
          <h1>Bienvenido Usuario</h1>
          <hr />
        </div>
      </section>
      <section className="home__options">
        <div className="optionContainer">
          <div className="option">
            <img src={truck} alt="" />
            <h6>Crear Viaje</h6>
          </div>
        </div>
        <div className="optionContainer">
          <div className="option">
            <img src={addCattle} alt="" />
            <h6>Añadir Ganado</h6>
          </div>
        </div>
        <div className="optionContainer">
          <div className="option">
            <img src={farm2} alt="" />
            <h6>Finca</h6>
          </div>
        </div>
        <div className="optionContainer">
          <div className="option">
            <img src={truck2} alt="" />
            <h6>Ver Viajes</h6>
          </div>
        </div>
        <div className="optionContainer">
          <div className="option">
            <img src={vaccination} alt="" />
            <h6>Vacunación</h6>
          </div>
        </div>
        <div className="optionContainer">
          <div className="option">
            <img src={cattle} alt="" />
            <h6>Ver Ganado</h6>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Home;
