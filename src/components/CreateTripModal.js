import React from "react";
import male from "../static/images/svgs/MaleCattle.svg"
import female from "../static/images/svgs/FemaleCattle.svg"
import "./Styles/buttons.scss";

function CreateTripModal(props) {
  return (
    <div class="tripDetails__amount">
      <h5>Elige la cantidad de Machos y Hembras</h5>
      <div class="tripDetails__amount__option">
        <div class="tripDetails__amount__selector">
          <i>
            <img src= { male } alt="" />
          </i>
          <input type="text" />
        </div>
        <div class="tripDetails__amount__selector">
          <i>
            <img src= { female } alt="" />
          </i>
          <input type="text" />
        </div>
      </div>
      <div class="confirmButton">
        <button>Guardar</button>
      </div>
    </div>
  );
}

export default CreateTripModal;
