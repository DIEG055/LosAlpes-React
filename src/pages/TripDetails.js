import React, { useEffect } from "react";
import MainLayout from "../components/MainLayout";
import TripDetailsInfo from "../components/TripDetailsInfo";

import "./Styles/tripDetails.scss";
import TripDetailsTable from "../components/TripDetailsTable";
import { useSelector, useDispatch } from 'react-redux'
import { getTrip } from '../redux/actions/trips'
import { getCattlesByTrip } from '../redux/actions/cattle'

function TripDetails(props) {

  const trip = useSelector( state => state.trips.trip);
  const cattle = useSelector( state => state.cattle.cattlesByTrip);
  const dispatch = useDispatch();
  const id = props.match.params.id;  

  useEffect( () => {
    const id = props.match.params.id;  
    dispatch(getTrip(id))
    dispatch(getCattlesByTrip(id))
  })

  return (
    <MainLayout>
      <div className="tripDetails">
        <TripDetailsInfo data= { trip }></TripDetailsInfo>
        <div className="tripsDetails__Data">
          <TripDetailsTable cattle = { cattle || [] } id={id}></TripDetailsTable>
        </div>
      </div>
    </MainLayout>
  );
}

export default TripDetails;
