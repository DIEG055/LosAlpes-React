import React from "react";
import MainLayout from "../components/MainLayout";
import TripDetailsInfo from "../components/TripDetailsInfo";

import "./Styles/tripDetails.scss";
import TripDetailsTable from "../components/TripDetailsTable";

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/actions/counter'

function TripDetails() {

  const tableData = useSelector( state => {
    console.log(state.counter);
    
  })

  const dispatch = useDispatch();
  dispatch(increment);

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
