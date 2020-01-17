import React from "react";
import "./Styles/buttons.scss";
import "./Styles/cattleDetails.scss";
import "./Styles/TripDetailsInfo.scss";
import { Link } from "react-router-dom";

function CattleDetailsInfo(props) {
  const data = props.data;

  return (

      <div className="cattleDetails__info">
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
        <div className="confirmButton">
          {/* <Link to={`/cattle/${data.id}/edit`}> */}
            <button onClick = {props.onActiveEdit}>Edit</button>
          {/* </Link> */}
          <button onClick={props.onOpenModal}>Eliminar</button>
        </div>
      </div>

  );
}

export default CattleDetailsInfo;
