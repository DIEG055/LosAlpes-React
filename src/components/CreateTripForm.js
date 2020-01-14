import React from "react";
import "./Styles/forms.scss";
import "./Styles/TripDetailsInfo.scss";
import male from "../static/images/svgs/MaleCattle.svg"
import female from "../static/images/svgs/FemaleCattle.svg"

function CreateTripForm(props) {
  const { register, handleSubmit, errors, onSubmit } = props;

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
         {/* {errors.type && <spa n>This field is required</span>}  */}
      </div>
      <div className="form__item">
        <label>Cantidad</label>
        <input type="text" name="amount" ref={register({ required: true, min: 0 })} />
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
      <div className="form__item"><label>Cantidad Machos y Hembras</label></div>
      <div className="tripDetails__amount__option">
        <div className="tripDetails__amount__selector">
          <i>
            <img src= { male } alt="" name="amountMale" ref={register({ required: true })} />
          </i>
          <input type="text" />
        </div>
        <div className="tripDetails__amount__selector">
          <i>
            <img src= { female } alt="" name="amountFemale" ref={register({ required: true })} />
          </i>
          <input type="text" />
        </div>
      </div>
      


      <div className="form__button">
        <button type="submit">Crear</button>
      </div>
    </form>
  );
}

export default CreateTripForm;
