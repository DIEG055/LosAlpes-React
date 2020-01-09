import React from "react";

import "./Styles/SignInForm.scss";
import googleIcon from "../static/images/icons/Google.svg" ;
import facebookIcon from "../static/images/icons/Facebook.svg" ;

class SignInForm extends React.Component {
  render() {

    return (
 <div className="signIn">
            <div className="signIn__container">
                <h1>Inicia Sesión</h1>
                <form action="">
                    <div className="form__item">
                        <label for="email">Correo Electrónico</label>
                        <input type="email"/>
                    </div>
                    <div className="form__item">
                        <label for="password">contraseña</label>
                        <input type="password"/>
                    </div>
                    <div className="form__button__signIn"><button>Iniciar</button></div>
                </form>
                <div className="redirectSignIn">
                    No tienes una cuenta? <a href="#">Registrate</a>
                </div>
                <div className="SignIn__SocialMedia">
                    <div className="socialGoogle">
                        <img src={ googleIcon } alt="Google"/>
                    </div>
                    <div className="socialGoogle">
                        <img src= { facebookIcon } alt="Facebook"/>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default  SignInForm;