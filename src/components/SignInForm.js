import React from "react";

import { Link } from "react-router-dom";
import "./Styles/SignInForm.scss";
import googleIcon from "../static/images/icons/Google.svg";
import facebookIcon from "../static/images/icons/Facebook.svg";

const SignInForm = props => {
  const { inputs, handleInputChange, handleSubmit } = props;

  return (
    <div className="signIn">
      <div className="signIn__container">
        <h1>Inicia Sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="form__item">
            <label>Correo Electrónico</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleInputChange}
              value={inputs.email}
            />
          </div>
          <div className="form__item">
            <label>contraseña</label>
            <input
              type="password"
              name="password"
              required
              onChange={handleInputChange}
              value={inputs.password}
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
