import React, { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import TripDetailsInfo from "../components/TripDetailsInfo";
import { Link } from "react-router-dom";
import "./Styles/tripDetails.scss";
import TripDetailsTable from "../components/TripDetailsTable";
import { useSelector, useDispatch } from "react-redux";
import { getTrip, deleteTrip, editTrip } from "../redux/actions/trips";
import { getCattlesByTrip } from "../redux/actions/cattle";
import DeleteTripModal from "../components/DeleteTripModal";

import EditTripForm from "../components/EditTripForm";
function TripDetails(props) {
  const trip = useSelector(state => state.trips.trip);
  const cattle = useSelector(state => state.cattle.cattlesByTrip);
  const dispatch = useDispatch();
  const id = props.match.params.id;

  const [modal, setModal] = useState({
    modalIsOpen: false
  });

  const [inputs, setInputs] = useState({});

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    const tripEdited = {
      ...trip,
      date: inputs.date,
      type: inputs.type,
      dealer: inputs.dealer,
      price: inputs.price,
    };
    
    dispatch(editTrip(tripEdited));
    props.history.push(`/trips/${id}`);
    setEdit(false);
  };
  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  const [edit, setEdit] = useState(false);
  const handleActiveEdit = e => {
    setInputs({
      date: trip.date,
      type: trip.type,
      dealer: trip.dealer,
      price: trip.price,
    });
    setEdit(true);
  };
  const handleDeactiveEdit = e => {
    setEdit(false);
  };

  useEffect(() => {
    const id = props.match.params.id;
    dispatch(getTrip(id));
    dispatch(getCattlesByTrip(id));
  });

  const handleOpenModal = e => {
    setModal({ modalIsOpen: true });
  };

  const handleCloseModal = e => {
    setModal({ modalIsOpen: false });
  };

  const handleDeleteTrip = async e => {
    setModal({ loading: true, error: null });

    try {
      // await api.badges.remove(this.props.match.params.badgeId);
      setModal({ loading: false });
      dispatch(deleteTrip(id));
      props.history.push("/trips");
    } catch (error) {
      // setModal({ loading: false, error: error });
    }
  };

  return (
    <MainLayout>
      <div className="tripDetails">
        <div className="tripDetails__container">
        <div>
        { edit && ( <Link to={`/trips/${id}`}>
              <button onClick= { handleDeactiveEdit}>Regresar</button>
            </Link>)}
            <h1>{trip.date}</h1>
          </div>
          <hr />
          {!edit && (
            <TripDetailsInfo
              data={trip}
              onOpenModal={handleOpenModal}
              onActiveEdit={handleActiveEdit}
            ></TripDetailsInfo>
          )}
          {edit && (<EditTripForm
              inputs={inputs || {}}
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
            ></EditTripForm>)}
        </div>
        <div className="tripsDetails__Data">
          <TripDetailsTable cattle={cattle || []} id={id}></TripDetailsTable>
        </div>
      </div>
      <DeleteTripModal
        onClose={handleCloseModal}
        onOpenModal={handleOpenModal}
        modalIsOpen={modal.modalIsOpen}
        onDeleteTrip={handleDeleteTrip}
      />
    </MainLayout>
  );
}

export default TripDetails;
