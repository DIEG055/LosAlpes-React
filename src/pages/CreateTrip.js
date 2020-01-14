import React from "react";
import MainLayout from "../components/MainLayout";
import "./Styles/createTrip.scss";

import CreateTripForm from "../components/CreateTripForm";
import { useForm } from "react-hook-form";

import CreateTripModal from "../components/CreateTripModal";

const CreateTrip = () => {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <MainLayout>
      <div className="tripDetails">
        <div className="tripDetails__container">
          <h1>Crea un Viaje</h1>
          <CreateTripForm 
          register = { register }
          handleSubmit = { handleSubmit }
          error = { errors }
          onSubmit = { onSubmit }
          ></CreateTripForm>
        </div>
        {/* <CreateTripModal></CreateTripModal> */}
      </div>
    </MainLayout>
  );
}

export default CreateTrip;
