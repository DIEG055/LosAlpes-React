import React, { useState } from "react";

import LoginLayout from "../components/LoginLayout";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    name:'',
    lastname:'',
    farmname:'',
    email:'',
    password:''
  });

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    console.log(inputs);
    
    // Se validan y envian los datos a la API
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <LoginLayout>
      <SignUpForm
        inputs={inputs}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      ></SignUpForm>
    </LoginLayout>
  );
};

export default SignUp;
