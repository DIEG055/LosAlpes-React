import React from "react";
import MainLayout from "../components/MainLayout";
import "./Styles/createTrip.scss";

import AddCattleForm from "../components/AddCattleForm";
import { useForm } from "react-hook-form";

const AddCattle = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <MainLayout>
      <div className="tripDetails">
        <div className="tripDetails__container">
          <h1>Añade Ganado</h1>
          <AddCattleForm
            register={register}
            handleSubmit={handleSubmit}
            error={errors}
            onSubmit={onSubmit}
          ></AddCattleForm>
        </div>
      </div>
    </MainLayout>
  );
};
export default AddCattle;
