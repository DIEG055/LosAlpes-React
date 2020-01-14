import React from "react";
import "./Styles/forms.scss";


function AddCattleForm(props) {
  const { register, handleSubmit, errors, onSubmit } = props;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form__item">
        <label>ID</label>
        <input type="text" name="ID" ref={register({ required: true })} />
        {/* {errors.date && <span>This field is required</span>} */}
      </div>
      <div className="form__item">
        <label>Fecha Llegada</label>
        <input type="date" name="birthDate" ref={register({ required: true })} />
         {/* {errors.type && <spa n>This field is required</span>}  */}
      </div>
      <div className="form__item">
        <label>Fecha Nacimiento</label>
        <input type="date" name="amount" ref={register({ required: true, min: 0 })} />
        {/* {errors.amount && <span>This field is required</span>} */}
      </div>
      <div className="form__item">
        <label>Genero</label>
        <input type="text" name="gender" ref={register({ required: true })} />
        {/* {errors.place && <span>This field is required</span>} */}
      </div>
      <div className="form__item">
        <label>Valor Compra</label>
        <input type="text" name="purchasevalue" ref={register({ required: true })} />
        {/* {errors.price && <span>This field is required</span>} */}
      </div>
      <div className="form__item">
        <label>Estado</label>
        <input type="text" name="state" ref={register({ required: true })} />
        {/* {errors.price && <span>This field is required</span>} */}
      </div>
      <div className="form__button">
        <button type="submit">Crear</button>
      </div>
    </form>
  );
}

export default AddCattleForm;
