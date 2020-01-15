import React, { useState, useEffect , useCallback } from "react";
import MainLayout from "../components/MainLayout";
import "./Styles/trips.scss";
// import "./Styles/styles.scss";
import newButton from "../static/images/svgs/New.svg";
import TripsTable from "../components/TripsTable";
import TripsFilter from "../components/TripsFilter";

import { useSelector, useDispatch } from 'react-redux'
import { getTrips } from '../redux/actions/trips'

const TripList = () => {
  
  const trips = useSelector( state => state.trips);
  //lanza la accion cuando ocurre algun evento, el dispatch se deve poner donde ocurra el evento  
  const dispatch = useDispatch();

  // useEffect( () => {
  //   dispatch(getTrips());
  // })




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
          <TripsTable data={trips || []}></TripsTable>
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
