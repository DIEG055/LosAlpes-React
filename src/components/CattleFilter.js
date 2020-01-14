import React from "react";
import "./Styles/forms.scss";

function CattleFilter(props) {
  const { inputs, handleInputChange, handleSubmit } = props;

  return (
    <div className="tripsData__filter">
      <h1>Filtrar</h1>
      <form onSubmit={handleSubmit}>
        <div className="form__item">
          <label>Fecha Nacimiento</label>
          <input
            type="date"
            
            onChange={handleInputChange}
            value={inputs.date}
            name="date"
          />
        </div>
        <div className="form__item">
          <label>Edad</label>
          <input type="text"
          onChange={handleInputChange}
          value={inputs.age}
          name="age"/>
        </div>

        <div className="form__button__filter">
          <button>Buscar</button>
        </div>
      </form>
    </div>
  );
}

export default CattleFilter;
