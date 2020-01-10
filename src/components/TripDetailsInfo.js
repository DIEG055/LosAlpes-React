import React from "react";
import "./Styles/TripDetailsInfo.scss";

function TripDetailsContainer(props) {
  return (
    <div class="tripDetails__container">
      <h1>12/12/12</h1>
      <hr />
      <div class="tripDetails__info">
        <div>
          <h6>Fecha:</h6>
          <p>12/12/12</p>
        </div>
        <div>
          <h6>Tipo:</h6>
          <p>Venta</p>
        </div>
        <div>
          <h6>Comerciante:</h6>
          <p>Juan Diego</p>
        </div>
        <div>
          <h6>Lugar:</h6>
          <p>Sogamoso</p>
        </div>
        <div>
          <h6>Cantidad:</h6>
          <p>14</p>
        </div>
        <div>
          <h6>Valor:</h6>
          <p>20.000.000</p>
        </div>
        <div class="tripDetails__cattleInfo">
          <a href="#"> Detalles</a>
        </div>
      </div>
      <div class="form__button">
        <button>Eliminar</button>
        <button>Editar</button>
      </div>
    </div>
  );
}

export default TripDetailsContainer;
