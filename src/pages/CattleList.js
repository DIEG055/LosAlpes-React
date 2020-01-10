import React from "react";
import MainLayout from "../components/MainLayout";
import "./Styles/trips.scss";
// import "./Styles/styles.scss";
import newButton from "../static/images/svgs/New.svg";
import CattleTable from "../components/CattleTable";
import CattleFilter from "../components/CattleFilter";

function CattleList(props) {
  return (
    <MainLayout>
      <div className="container">
        <div class="tripsTitle">
          <div class="tripsTittle--position">
            <h1>Tus Ganado</h1>
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
          <CattleTable></CattleTable>
          <CattleFilter></CattleFilter>
        </div>
      </div>
    </MainLayout>
  );
}

export default CattleList;
