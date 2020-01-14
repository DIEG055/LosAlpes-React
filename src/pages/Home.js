import React from "react";


import MainLayout from "../components/MainLayout";
import "./Styles/home.scss";
import HomeItems from "../components/HomeItems";

function Home(props) {
  return (
    <MainLayout>
      <section className="welcomeInfo">
        <div className="welcomeUser">
          <h1>Bienvenido Usuario</h1>
          <hr />
        </div>
      </section>
      <HomeItems></HomeItems>
    </MainLayout>
  );
}

export default Home;
