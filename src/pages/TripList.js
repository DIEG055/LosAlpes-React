import React, { useState } from "react";
import MainLayout from "../components/MainLayout";
import "./Styles/trips.scss";
// import "./Styles/styles.scss";
import newButton from "../static/images/svgs/New.svg";
import TripsTable from "../components/TripsTable";
import TripsFilter from "../components/TripsFilter";

const TripList = () => {
  const trips = [
    {
      date: "hola",
      type: "compra",
      dealer: "persona",
      place: "Yopal",
      amount: "14",
      price: "14.000.000",
      ids: false
    },
    {
      date: "hola",
      type: "compra",
      dealer: "persona",
      place: "Yopal",
      amount: "14",
      price: "14.000.000",
      ids: true
    },
    {
      date: "hola",
      type: "compra",
      dealer: "persona",
      place: "Yopal",
      amount: "14",
      price: "14.000.000",
      ids: false
    },
    {
      date: "hola",
      type: "compra",
      dealer: "persona",
      place: "Yopal",
      amount: "14",
      price: "14.000.000",
      ids: false
    }
  ];

  const [inputs, setInputs] = useState({
    date: "",
    type: "",
    dealer: ""
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
            <h1>Tus Viajes</h1>
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
          <TripsTable data={trips}></TripsTable>
          <TripsFilter
            inputs={inputs}
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
          ></TripsFilter>
        </div>
      </div>
    </MainLayout>
  );
};

export default TripList;
