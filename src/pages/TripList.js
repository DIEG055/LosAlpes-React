import React from "react";
import MainLayout from "../components/MainLayout";
import "./Styles/trips.scss";
import "./Styles/styles.scss";
import newButton from "../static/images/svgs/New.svg";
import TripsTable from "../components/TripsTable";
import TripsFilter from "../components/TripsFilter";

function TripList(props) {
  return (
    <MainLayout>
      <div className="container">
        <div class="tripsTitle">
          <div class="tripsTittle--position">
            <h1>Tus Viajes</h1>
            <div class="newButton">
              Nuevo
              <button>
                <i>
                  <img src={newButton} alt="" />
                </i>
              </button>
            </div>
          </div>
          <hr />
        </div>
        <div class="tripsData">
          <TripsTable></TripsTable>
          <TripsFilter></TripsFilter>
        </div>
      </div>
    </MainLayout>
  );
}

export default TripList;
