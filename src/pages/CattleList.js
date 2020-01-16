import React, { useState } from "react";
import MainLayout from "../components/MainLayout";
import "./Styles/trips.scss";
// import "./Styles/styles.scss";
import newButton from "../static/images/svgs/New.svg";
import CattleTable from "../components/CattleTable";
import CattleFilter from "../components/CattleFilter";


import { useSelector } from 'react-redux'
function CattleList(props) {
  const data = useSelector ( state => state.cattle )

  const [inputs, setInputs] = useState({
    date: "",
    age: ""
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
    <MainLayout>
      <div className="container">
        <div className="tripsTitle">
          <div className="tripsTittle--position">
            <h1>Tus Ganado</h1>
            <div className="newButton">
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
        <div className="tripsData">
        <div className="tripsData__table">
          <CattleTable data={data.cattles }></CattleTable>
          </div>
          <CattleFilter
            inputs={inputs}
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
          ></CattleFilter>
        </div>
      </div>
    </MainLayout>
  );
}

export default CattleList;
