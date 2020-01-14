import React, { useState } from "react";
import MainLayout from "../components/MainLayout";
import "./Styles/trips.scss";
// import "./Styles/styles.scss";
import newButton from "../static/images/svgs/New.svg";
import CattleTable from "../components/CattleTable";
import CattleFilter from "../components/CattleFilter";

function CattleList(props) {
  const data = [
    {
      id: "1",
      age: "1 año",
      gender: "macho",
      price: "1.400.000",
      place: "Yopal",
      state: "En Finca"
    },
    {
      id: "1",
      age: "1 año",
      gender: "macho",
      price: "1.400.000",
      place: "Yopal",
      state: "En Finca"
    },
    {
      id: "1",
      age: "1 año",
      gender: "macho",
      price: "1.400.000",
      place: "Yopal",
      state: "En Finca"
    },
    {
      id: "1",
      age: "1 año",
      gender: "macho",
      price: "1.400.000",
      place: "Yopal",
      state: "En Finca"
    }
  ];

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
          <CattleTable data={data}></CattleTable>
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
