import React from "react";
import "./Styles/forms.scss";


function EditcattleForm(props) {
  const { inputs, handleInputChange, handleSubmit } = props;
  return (
    
    <form onSubmit={handleSubmit}>
      
      <div className="form__item">
        <label>Fecha Llegada</label>
        <input type="date" placeholder='hola111' name="arrivalDate"  onChange={handleInputChange}
              value={inputs.arrivalDate} />
         {/* {errors.type && <spa n>This field is required</span>}  */}
      </div>
      <div className="form__item">
        <label>Fecha Nacimiento</label>
        <input type="date" name="birthDate"  onChange={handleInputChange}
              value={inputs.birthDate} />
        {/* {errors.amount && <span>This field is required</span>} */}
      </div>
      <div className="form__item">
        <label>Genero</label>
        <input type="text" name="gender"  onChange={handleInputChange}
              defaultValue={inputs.gender} />
        {/* {errors.place && <span>This field is required</span>} */}
      </div>
      <div className="form__item">
        <label>Valor Compra</label>
        <input type="text"  name="purchaseValue"  onChange={handleInputChange}
              value={inputs.purchaseValue} />
        {/* {errors.price && <span>This field is required</span>} */}
      </div>
      <div className="form__item">
        <label>Estado</label>
        <input  name="state"  onChange={handleInputChange}
              value={inputs.state } />
        {/* {errors.price && <span>This field is required</span>} */}
      </div>
      <div className="form__button">
        <button type="submit">Confirmar</button>
      </div>
    </form>
  );
}

export default EditcattleForm;
