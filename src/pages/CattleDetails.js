import React, { useEffect } from 'react'
import MainLayout from '../components/MainLayout';
import "./Styles/cattleDetails.scss";
import CattleDetailsInfo from '../components/CattleDetailsInfo';
import CattleDetailsImages from '../components/CattleDetailsImages';
import CattleDetailsDecency from '../components/CattleDetailsDecency';

import { useSelector, useDispatch } from 'react-redux'
import { getCattle, getCattlesByMom } from '../redux/actions/cattle'

const CattleDetails =  (props) => {

    const data = useSelector( state => state.cattle.cattle);
    const decencyData = useSelector( state => state.cattle.cattlesByMom);
    const dispatch = useDispatch();
    const id = props.match.params.id; 

    useEffect( () => {
      const id = props.match.params.id;  
      dispatch(getCattle(id));
      dispatch(getCattlesByMom(id))
    })



    

    return (
        <MainLayout>
            <div className="cattleDetails">
               <CattleDetailsInfo data = { data }></CattleDetailsInfo>
               <CattleDetailsImages images = { data.images }></CattleDetailsImages>
               <CattleDetailsDecency data = { decencyData.filter(item => item.mom === id ) }></CattleDetailsDecency>
            </div>
        </MainLayout>
    )
}

export default CattleDetails;