import React from "react";
import "./Styles/forms.scss";
import "./Styles/trips.scss";

function TripsFilter(props) {
  const { inputs, handleInputChange, handleSubmit } = props;
  return (
    <div className="tripsData__filter">
      <h1>Filtrar</h1>
      <form onSubmit={handleSubmit}>
        <div className="form__item">
          <label>Fecha</label>
          <input
            type="date"
            onChange={handleInputChange}
            value={inputs.date}
            name="date"
          />
        </div>
        <div className="form__item">
          <label>Tipo</label>
          <input
            type="text"
            onChange={handleInputChange}
            value={inputs.type}
            name="type"
          />
        </div>
        <div className="form__item">
          <label>Negociante</label>
          <input
            type="text"
            onChange={handleInputChange}
            value={inputs.dealer}
            name="dealer"
          />
        </div>

        <div className="form__button__filter">
          <button>Buscar</button>
        </div>
      </form>
    </div>
  );
}

export default TripsFilter;
