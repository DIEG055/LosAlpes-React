import React, { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import "./Styles/cattleDetails.scss";
import CattleDetailsInfo from "../components/CattleDetailsInfo";
import CattleDetailsImages from "../components/CattleDetailsImages";
import CattleDetailsDecency from "../components/CattleDetailsDecency";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getCattle,
  getCattlesByMom,
  deleteCattle,
  editCattle
} from "../redux/actions/cattle";
import DeleteCattleModal from "../components/DeleteCattleModal";

import EditcattleForm from "../components/EditCattleForm";
const CattleDetails = props => {
  const data = useSelector(state => state.cattle.cattle);
  const decencyData = useSelector(state => state.cattle.cattlesByMom);
  const dispatch = useDispatch();
  const id = props.match.params.id;

  const [inputs, setInputs] = useState({});

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    const cattleEdited = {
      ...data,
      arrivalDate: inputs.arrivalDate,
      gender: inputs.gender,
      purchaseValue: inputs.purchaseValue,
      state: inputs.state,
      birthDate: inputs.birthDate
    };

    dispatch(editCattle(cattleEdited));
    props.history.push(`/cattle/${id}`);
    setEdit(false);
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  const [modal, setModal] = useState({
    modalIsOpen: false
  });
  
  const [edit, setEdit] = useState(false);
  const handleActiveEdit = e => {
    setInputs({
      arrivalDate: data.arrivalDate,
      gender: data.gender,
      purchaseValue: data.purchaseValue,
      state: data.state,
      birthDate: data.birthDate
    });
    setEdit(true);
  };
  const handleDeactiveEdit = e => {
    setEdit(false);
  };

  useEffect(() => {
    const id = props.match.params.id;
    dispatch(getCattle(id));
    dispatch(getCattlesByMom(id));
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
      dispatch(deleteCattle(id));
      props.history.push("/cattle");
    } catch (error) {
      // setModal({ loading: false, error: error });
    }
  };

  return (
    <MainLayout>
      <div className="cattleDetails">
        <div className="tripDetails__container">
          <div>
           { edit && ( <Link to={`/cattle/${id}`}>
              <button onClick= { handleDeactiveEdit}>Regresar</button>
            </Link>)}
            <h1># 141</h1>
          </div>
          <hr />
          {!edit && (
            <CattleDetailsInfo
              data={data}
              onOpenModal={handleOpenModal}
              onActiveEdit={handleActiveEdit}
              onDeactiveEdit={handleDeactiveEdit}
            ></CattleDetailsInfo>
          )}
          {edit && (
            <EditcattleForm
              inputs={inputs || {}}
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
            ></EditcattleForm>
          )}
        </div>
        <CattleDetailsImages images={data.images}></CattleDetailsImages>
        <CattleDetailsDecency
          data={decencyData.filter(item => item.mom === id)}
        ></CattleDetailsDecency>
      </div>
      <DeleteCattleModal
        onClose={handleCloseModal}
        onOpenModal={handleOpenModal}
        modalIsOpen={modal.modalIsOpen}
        onDeleteTrip={handleDeleteTrip}
      />
    </MainLayout>
  );
};

export default CattleDetails;
