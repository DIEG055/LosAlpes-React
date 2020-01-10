import React from 'react'
import "./Styles/buttons.scss";
import "./Styles/cattleDetails.scss";
import "./Styles/TripDetailsInfo.scss";

function CattleDetailsInfo (props) {
    return (
<div class="tripDetails__container">
          <h1># 141</h1>
          <hr />
          <div class="cattleDetails__info">
            <div>
              <h6>ID:</h6>
              <p>141</p>
            </div>
            <div>
              <h6>Fecha Llegada:</h6>
              <p>12/12/12</p>
            </div>
            <div>
            <div>
              <h6>Fecha Venta:</h6>
              <p>12/12/12</p>
            </div>
            <div>
              <h6>Fecha Nacimiento:</h6>
              <p>12/12/12</p>
            </div>
            <div>
              <h6>Edad:</h6>
              <p>2 años 6 meses</p>
            </div>
            <div>
              <h6>Genero:</h6>
              <p>Hembra</p>
            </div>
            <div>
              <h6>Valor Compra:</h6>
              <p>2.000.000</p>
            </div>
              <div>
              <h6>Valor Ventas:</h6>
              <p>2.000.000</p>
            </div>
              <div>
              <h6>Estado:</h6>
              <p>Vendido</p>
            </div>

          </div>
          <div class="confirmButton">
            <button>Editar</button>
          </div>
        </div>
        
      </div>
    )
}

export default CattleDetailsInfo;