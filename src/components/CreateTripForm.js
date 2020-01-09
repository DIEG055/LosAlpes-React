import React from 'react'
import "./Styles/forms.scss";

function CreateTripForm (props){
    return (
        
        <form action="">
          <div class="form__item">
            <label for="Date">Fecha</label>
            <input type="date" />
          </div>
          <div class="form__item">
            <label for="type">Type</label>
            <input type="text" />
          </div>
          <div class="form__item">
            <label for="Amount">Cantidad</label>
            <input type="text" />
          </div>
          <div class="form__item">
            <label for="Dealer">Negociante</label>
            <input type="text" />
          </div>
          <div class="form__item">
            <label for="place">lugar</label>
            <input type="text" />
          </div>
          <div class="form__item">
            <label for="Price">Precio</label>
            <input type="text" />
          </div>
          <div class="form__button">
            <button>Crear</button>
          </div>
        </form>


    )
}

export default CreateTripForm;