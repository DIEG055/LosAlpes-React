import React from "react";
import "./Styles/buttons.scss";
import "./Styles/cattleDetails.scss";
import "./Styles/TripDetailsInfo.scss";

function CattleDetailsInfo(props) {
  const data = props.data;

  return (
    <div class="tripDetails__container">
      <h1># 141</h1>
      <hr />
      <div class="cattleDetails__info">
        <div>
          <h6>ID:</h6>
          <p>{data.id}</p>
        </div>
        <div>
          <h6>Fecha Llegada:</h6>
          <p>{data.arrivalDate}</p>
        </div>
        <div>
          <div>
            <h6>Fecha Venta:</h6>
            <p>{data.saleDate}</p>
          </div>
          <div>
            <h6>Fecha Nacimiento:</h6>
            <p>{data.birthDate}</p>
          </div>
          <div>
            <h6>Edad:</h6>
            <p>{data.age}</p>
          </div>
          <div>
            <h6>Genero:</h6>
            <p>{data.gender}</p>
          </div>
          <div>
            <h6>Valor Compra:</h6>
            <p>{data.purchaseValue}</p>
          </div>
          <div>
            <h6>Valor Ventas:</h6>
            <p>{data.saleValue}</p>
          </div>
          <div>
            <h6>Estado:</h6>
            <p>{data.state}</p>
          </div>
        </div>
        <div class="confirmButton">
          <button>Editar</button>
        </div>
      </div>
    </div>
  );
}

export default CattleDetailsInfo;
