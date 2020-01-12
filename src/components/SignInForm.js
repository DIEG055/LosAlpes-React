import React from "react";
import useSignInForm from "../customHooks/forms/useSignInForm";

import { Link } from "react-router-dom";
import "./Styles/SignInForm.scss";
import googleIcon from "../static/images/icons/Google.svg";
import facebookIcon from "../static/images/icons/Facebook.svg";

const SignInForm = () => {
  const signin = () => {
    console.log(inputs);
    // Se envian los datos a la API
  };

  const { inputs, handleInputChange, handleSubmit } = useSignInForm(signin);

  return (
    <div className="signIn">
      <div className="signIn__container">
        <h1>Inicia Sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="form__item">
            <label for="email">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form__item">
            <label for="password">contraseña</label>
            <input
              type="password"
              name="password"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form__button__signIn">
            <button>Iniciar</button>
          </div>
        </form>
        <div className="redirectSignIn">
          No tienes una cuenta? <Link to="/signup"> Registrate</Link>
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
};

export default SignInForm;
