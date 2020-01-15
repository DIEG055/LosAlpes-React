import React from "react";
import MainLayout from "../components/MainLayout";
import "./Styles/createTrip.scss";
import CreateTripForm from "../components/CreateTripForm";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTrip } from "../redux/actions/trips";
import CreateTripModal from "../components/CreateTripModal";

const CreateTrip = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    dispatch(addTrip({ ...data, ids:   false }));
  };
  return (
    <MainLayout>
      <div className="tripDetails">
        <div className="tripDetails__container">
          <h1>Crea un Viaje</h1>
          <CreateTripForm
            register={register}
            handleSubmit={handleSubmit}
            error={errors}
            onSubmit={onSubmit}
          ></CreateTripForm>
        </div>
        {/* <CreateTripModal></CreateTripModal> */}
      </div>
    </MainLayout>
  );
};

export default CreateTrip;
