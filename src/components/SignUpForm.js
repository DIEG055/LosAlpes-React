import React from "react";
import { Link } from "react-router-dom";
import "./Styles/SignUpForm.scss";
import googleIcon from "../static/images/icons/Google.svg";
import facebookIcon from "../static/images/icons/Facebook.svg";

const SignUpForm = props => {
  const { inputs, handleInputChange, handleSubmit } = props;

  return (
    <div className="signUp">
      <div className="signUp__container">
        <h1>Regístrate</h1>
        <form onSubmit={handleSubmit}>
          <div className="form__item">
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleInputChange}
              value={inputs.name}
            />
          </div>
          <div className="form__item">
            <label>Apellido</label>
            <input
              type="text"
              name="lastname"
              required
              onChange={handleInputChange}
              value={inputs.lastname}
            />
          </div>
          <div className="form__item">
            <label>Nombre Finca</label>
            <input
              type="text"
              name="farmname"
              required
              onChange={handleInputChange}
              value={inputs.farmname}
            />
          </div>
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
          <div className="form__button">
            <button type="submit">Registrarse</button>
          </div>
        </form>
        <div className="redirectSignIn">
          Ya tienes una cuenta? <Link to="/signin"> Inicia Sesión</Link>
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

export default SignUpForm;
