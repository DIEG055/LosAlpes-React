import React from 'react'
import MainLayout from '../components/MainLayout';
import "./Styles/cattleDetails.scss";
import CattleDetailsInfo from '../components/CattleDetailsInfo';
import CattleDetailsImages from '../components/CattleDetailsImages';
import CattleDetailsDecency from '../components/CattleDetailsDecency';

function CattleDetails (props) {
    return (
        <MainLayout>
            <div className="cattleDetails">
               <CattleDetailsInfo></CattleDetailsInfo>
               <CattleDetailsImages></CattleDetailsImages>
               <CattleDetailsDecency></CattleDetailsDecency>
            </div>
        </MainLayout>
    )
}

export default CattleDetails;