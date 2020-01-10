import React from "react";
import "./Styles/forms.scss";

function CattleFilter(props) {
  return (
    <div class="tripsData__filter">
      <h1>Filtrar</h1>
      <form action="">
        <div class="form__item">
          <label for="date">Fecha</label>
          <input type="date" />
        </div>
        <div class="form__item">
          <label for="type">Tipo</label>
          <input type="text" />
        </div>
        <div class="form__item">
          <label for="Dealer">Negociante</label>
          <input type="text" />
        </div>

        <div class="form__button__filter">
          <button>Buscar</button>
        </div>
      </form>
    </div>
  );
}

export default CattleFilter;
