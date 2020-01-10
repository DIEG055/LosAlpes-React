import React from "react";
import MainLayout from "../components/MainLayout";
import TripDetailsInfo from "../components/TripDetailsInfo";

import "./Styles/tripDetails.scss";
import TripDetailsTable from "../components/TripDetailsTable";

function TripDetails(props) {
  return (
    <MainLayout>
      <div class="tripDetails">
        <TripDetailsInfo></TripDetailsInfo>
        <div class="tripsDetails__Data">
          <TripDetailsTable></TripDetailsTable>
        </div>
      </div>
    </MainLayout>
  );
}

export default TripDetails;
