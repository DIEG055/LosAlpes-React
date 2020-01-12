import React from "react";
import MainLayout from "../components/MainLayout";
import "./Styles/createTrip.scss";
import CreateTripForm from "../components/CreateTripForm";
import CreateTripModal from "../components/CreateTripModal";

function CreateTrip(props) {
  return (
    <MainLayout>
      <div className="tripDetails">
        <div className="tripDetails__container">
          <h1>Crea un Viaje</h1>
          <CreateTripForm></CreateTripForm>
        </div>
        <CreateTripModal></CreateTripModal>
      </div>
    </MainLayout>
  );
}

export default CreateTrip;
