import React from "react";

import "./Styles/SignUpForm.scss";
import googleIcon from "../static/images/icons/Google.svg" ;
import facebookIcon from "../static/images/icons/Facebook.svg" ;


class SignUpForm extends React.Component {
  render() {

    return (

           <div className="signUp">
        <div className="signUp__container">
          <h1>Regístrate</h1>
          <form action="">
            <div className="form__item">
              <label for="Name">Nombre</label>
              <input type="text" />
            </div>
            <div className="form__item">
              <label for="Lastname">Apellido</label>
              <input type="text" />
            </div>
            <div className="form__item">
              <label for="Farm">Nombre Finca</label>
              <input type="text" />
            </div>
            <div className="form__item">
              <label for="email">Correo Electrónico</label>
              <input type="email" />
            </div>
            <div className="form__item">
              <label for="password">contraseña</label>
              <input type="password" />
            </div>
            <div className="form__button">
              <button>Registrarse</button>
            </div>
          </form>
          <div className="redirectSignIn">
            Ya tienes una cuenta? <a href="">Inicia Sesión</a>
          </div>
          <div className="SignIn__SocialMedia">
            <div className="socialGoogle">
              <img src={googleIcon} alt="Google" />
            </div>
            <div className="socialGoogle">
              <img src={facebookIcon} alt="Facebook" />
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default  SignUpForm;