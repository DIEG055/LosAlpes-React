import React from "react";
import "./Styles/TripDetailsInfo.scss";

function TripDetailsContainer(props) {
  const data = props.data;
  
  return (
    
   <React.Fragment>
        <div className="tripDetails__info">
        <div>
          <h6>Fecha:</h6>
          <p>{data.date}</p>
        </div>
        <div>
          <h6>Tipo:</h6>
          <p>{data.type}</p>
        </div>
        <div>
          <h6>Comerciante:</h6>
          <p>{data.dealer}</p>
        </div>
        <div>
          <h6>Lugar:</h6>
          <p>{data.date}</p>
        </div>
        <div>
          <h6>Cantidad:</h6>
          <p>{data.amound}</p>
        </div>
        <div>
          <h6>Valor:</h6>
          <p>{data.price}</p>
        </div>
        <div className="tripDetails__cattleInfo">
          <a href="#"> Detalles</a>
        </div>
      </div>
      <div className="form__button">
        <button onClick={props.onOpenModal}  >Eliminar</button>
        <button onClick = {props.onActiveEdit}>Editar</button>
        <button> ID's  </button>
      </div>
   </React.Fragment>
    
   
  

  );
}

export default TripDetailsContainer;
