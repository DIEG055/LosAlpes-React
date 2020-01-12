import React from "react";
import useSignUpForm from "../customHooks/forms/useSignUpForm";
import { Link } from "react-router-dom";
import "./Styles/SignUpForm.scss";
import googleIcon from "../static/images/icons/Google.svg";
import facebookIcon from "../static/images/icons/Facebook.svg";

const SignUpForm = () => {
  const signup = () => {
    console.log(inputs);
    // Se envian los datos a la API
  }

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signup);


  return (
    <div className="signUp">
      <div className="signUp__container">
        <h1>Regístrate</h1>
        <form onSubmit={handleSubmit}>
          <div className="form__item">
            <label for="Name">Nombre</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleInputChange}
              value = { inputs.name }
            />
          </div>
          <div className="form__item">
            <label for="Lastname">Apellido</label>
            <input
              type="text"
              name="lastname"
              required
              onChange={handleInputChange}
              value = { inputs.lastname }
            />
          </div>
          <div className="form__item">
            <label for="Farm">Nombre Finca</label>
            <input
              type="text"
              name="farmname"
              required
              onChange={handleInputChange}
              value = { inputs.farmname }
            />
          </div>
          <div className="form__item">
            <label for="email">Correo Electrónico</label>
            <input
              type="email"
              name="email required "
              required
              onChange={handleInputChange}
              value = { inputs.email }
            />
          </div>
          <div className="form__item">
            <label for="password">contraseña</label>
            <input
              type="password"
              name="password"
              required
              onChange={handleInputChange}
              value = { inputs.password }
            />
          </div>
          <div className="form__button">
            <button>Registrarse</button>
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
