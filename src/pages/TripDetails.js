import React from "react";
import MainLayout from "../components/MainLayout";
import TripDetailsInfo from "../components/TripDetailsInfo";

import "./Styles/tripDetails.scss";
import TripDetailsTable from "../components/TripDetailsTable";

import { useSelector, useDispatch } from 'react-redux'
import { addTrip } from '../redux/actions/trips'

function TripDetails() {

  const counter = useSelector( state => state.counter)

  const dispatch = useDispatch();

  const prueba = {
    date: "holaaaaaa",
        type: "compra",
        dealer: "persona",
        place: "Yopal",
        amount: "14",
        price: "14.000.000",
        ids: true
  }  

  return (
    <MainLayout>
      <div className="tripDetails">
  
        <button onClick={()=> dispatch(addTrip(prueba))} >+</button>
        {/* <button onClick={()=> dispatch(decrement())} >-</button> */}
        <h1>{counter}</h1>
        <TripDetailsInfo></TripDetailsInfo>
        <div className="tripsDetails__Data">
          <TripDetailsTable></TripDetailsTable>
        </div>
      </div>
    </MainLayout>
  );
}

export default TripDetails;
