import React, { useState } from "react";

import LoginLayout from "../components/LoginLayout";
import SignInForm from "../components/SignInForm";

const SignIn = () => {
  const [inputs, setInputs] = useState({
      email:'',
      password:''
  });

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    console.log(inputs);
    
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
      <SignInForm
        inputs={inputs}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      ></SignInForm>
    </LoginLayout>
  );
};

export default SignIn;
