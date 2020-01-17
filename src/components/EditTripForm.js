import React from "react";
import "./Styles/forms.scss";


function EditTripForm(props) {
  const { inputs, handleInputChange, handleSubmit } = props;
  return (
    
    <form onSubmit={handleSubmit}>
      
      <div className="form__item">
        <label>Fecha</label>
        <input type="date"  name="date"  onChange={handleInputChange}
              value={inputs.date} />
         {/* {errors.type && <spa n>This field is required</span>}  */}
      </div>
      <div className="form__item">
        <label>Tipo</label>
        <input type="text" name="type"  onChange={handleInputChange}
              value={inputs.type} />
        {/* {errors.amount && <span>This field is required</span>} */}
      </div>
      <div className="form__item">
        <label>Negociante</label>
        <input type="text" name="dealer"  onChange={handleInputChange}
              defaultValue={inputs.dealer} />
        {/* {errors.place && <span>This field is required</span>} */}
      </div>

      <div className="form__item">
        <label>Precio</label>
        <input  name="price"  onChange={handleInputChange}
              value={inputs.price } />
        {/* {errors.price && <span>This field is required</span>} */}
      </div>
      <div className="form__button">
        <button type="submit">Confirmar</button>
      </div>
    </form>
  );
}

export default EditTripForm;
