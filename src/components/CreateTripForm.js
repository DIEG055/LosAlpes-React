import React, { useState } from 'react'
import "./Styles/forms.scss";

function CreateTripForm (props){

  const [form, setform] = useState(
    {}
  )

    return (
        
        <form action="">
          <div class="form__item">
            <label for="Date">Fecha</label>
            <input type="date" name="date" required/>
          </div>
          <div class="form__item">
            <label for="type">Tipo</label>
            <input type="text" name="type" required />
          </div>
          <div class="form__item">
            <label for="Amount">Cantidad</label>
            <input type="text" name="amount" required />
          </div>
          <div class="form__item">  
            <label for="Dealer">Negociante</label>
            <input type="text" name="dealer" required />
          </div>
          <div class="form__item">
            <label for="place">lugar</label>
            <input type="text" name="palce" required />
          </div>
          <div class="form__item">
            <label for="Price">Precio</label>
            <input type="text" name="price" required />
          </div>
          <div class="form__button">
            <button>Crear</button>
          </div>
        </form>


    )
}

export default CreateTripForm;