import React from "react";
import "./Styles/forms.scss";
import { useForm } from "react-hook-form";

function CreateTripForm() {
   const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form__item">
        <label>Fecha</label>
        <input type="date" name="date" ref={register({ required: true })} />
        {/* {errors.date && <span>This field is required</span>} */}
      </div>
      <div className="form__item">
        <label>Tipo</label>
        <input type="text" name="type" ref={register({ required: true })} />
        {/* {errors.type && <span>This field is required</span>} */}
      </div>
      <div className="form__item">
        <label>Cantidad</label>
        <input type="text" name="amount" ref={register({ required: true })} />
        {/* {errors.amount && <span>This field is required</span>} */}
      </div>
      <div className="form__item">
        <label>Negociante</label>
        <input type="text" name="dealer" ref={register({ required: true })} />
        {/* {errors.dealer && <span>This field is required</span>} */}
      </div>
      <div className="form__item">
        <label>lugar</label>
        <input type="text" name="place" ref={register({ required: true })} />
        {/* {errors.place && <span>This field is required</span>} */}
      </div>
      <div className="form__item">
        <label>Precio</label>
        <input type="text" name="price" ref={register({ required: true })} />
        {/* {errors.price && <span>This field is required</span>} */}
      </div>
      <div className="form__button">
        <button type="submit">Crear</button>
      </div>
    </form>
  );
}

export default CreateTripForm;
