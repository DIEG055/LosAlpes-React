import React, { useEffect } from "react";
import MainLayout from "../components/MainLayout";
import "./Styles/cattleDetails.scss";
import "./Styles/createTrip.scss";

import CattleDetailsImages from "../components/CattleDetailsImages";
import CattleDetailsDecency from "../components/CattleDetailsDecency";
import { useForm } from "react-hook-form";

import { useSelector, useDispatch } from "react-redux";
import { getCattle, getCattlesByMom, deleteCattle } from "../redux/actions/cattle";
import EditcattleForm from "../components/EditCattleForm";

const CattleDetails = props => {
  const data = useSelector(state => state.cattle.cattle);
  const decencyData = useSelector(state => state.cattle.cattlesByMom);
  const dispatch = useDispatch();
  const id = props.match.params.id;

  useEffect(() => {
    const id = props.match.params.id;
    dispatch(getCattle(id));
    dispatch(getCattlesByMom(id));
  });

  const { register, handleSubmit, errors    } = useForm({
    defaultValues : {
      birthDate: data.birtDate,
      arrivalDate: data.arrivalDate,
      gender: data.gender,
      purchaseValue: 'hola2',
      state: 'hola'
    }
  });
    const onSubmit = data => {
      console.log(data);
    };


  return (
    <MainLayout>
      {/* <div className="cattleDetails"> */}
      <div className="tripDetails">
        <div className="tripDetails__container">
        <form onSubmit={handleSubmit(onSubmit)}>

<div className="form__item">
  <label>Fecha Llegada</label>
  <input type="date" placeholder='hola111' name="arrivalDate" ref={register} />
   {/* {errors.type && <spa n>This field is required</span>}  */}
</div>
<div className="form__item">
  <label>Fecha Nacimiento</label>
  <input type="date" name="birthDate" ref={register} />
  {/* {errors.amount && <span>This field is required</span>} */}
</div>
<div className="form__item">
  <label>Genero</label>
  <input type="text" name="gender" ref={register} />
  {/* {errors.place && <span>This field is required</span>} */}
</div>
<div className="form__item">
  <label>Valor Compra</label>
  <input type="text"  name="purchaseValue" ref={register} />
  {/* {errors.price && <span>This field is required</span>} */}
</div>
<div className="form__item">
  <label>Estado</label>
  <input  name="state" ref={register} />
  {/* {errors.price && <span>This field is required</span>} */}
</div>
<div className="form__button">
  <button type="submit">Confirmara</button>
</div>
</form>
        {/* <EditcattleForm
         register = { register }
         handleSubmit = { handleSubmit }
         error = { errors }
         onSubmit = { onSubmit }
        ></EditcattleForm> */}
          </div>
      </div>
        {/* <CattleDetailsImages images={data.images}></CattleDetailsImages>
        <CattleDetailsDecency
          data={decencyData.filter(item => item.mom === id)}
        ></CattleDetailsDecency>
      </div> */}

    </MainLayout>
  );
};

export default CattleDetails;
