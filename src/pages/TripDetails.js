import React, { useEffect } from "react";
import MainLayout from "../components/MainLayout";
import TripDetailsInfo from "../components/TripDetailsInfo";

import "./Styles/tripDetails.scss";
import TripDetailsTable from "../components/TripDetailsTable";
import { useSelector, useDispatch } from 'react-redux'
import { getTrip } from '../redux/actions/trips'

function TripDetails(props) {

  const trip = useSelector( state => state.trips.trip);
  const dispatch = useDispatch();

  useEffect( () => {
    const date = props.match.params.id;  
    dispatch(getTrip(date))
  })

  return (
    <MainLayout>
      <div className="tripDetails">
        <TripDetailsInfo data= { trip }></TripDetailsInfo>
        <div className="tripsDetails__Data">
          <TripDetailsTable></TripDetailsTable>
        </div>
      </div>
    </MainLayout>
  );
}

export default TripDetails;
