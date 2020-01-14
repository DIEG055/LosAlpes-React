import React from 'react'
import MainLayout from '../components/MainLayout';
import "./Styles/cattleDetails.scss";
import CattleDetailsInfo from '../components/CattleDetailsInfo';
import CattleDetailsImages from '../components/CattleDetailsImages';
import CattleDetailsDecency from '../components/CattleDetailsDecency';

function CattleDetails (props) {

    const data =  {
        id:'1',
        arrivalDate: "12/12/19",
        departureDate: "12/12/19",
        birthDate: "01/01/20",
        age: "1 año",
        gender: "hembra",
        purchaseValue: "1.500.000",
        saleValue: "1.500.000",
        state: "En Finca",
        images: ['https://images.unsplash.com/photo-1542894956-c07e23120074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        'https://images.unsplash.com/photo-1542894956-c07e23120074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
        ]
    }

    const decency = [
        {
            id: "11",
            age: "1 año",
            gender: "macho",
            price: "1.400.000",
            place: "Yopal",
            state: "En Finca"
          },
          {
            id: "12",
            age: "1 año",
            gender: "macho",
            price: "1.400.000",
            place: "Yopal",
            state: "En Finca"
          }
    ]

    return (
        <MainLayout>
            <div className="cattleDetails">
               <CattleDetailsInfo data = { data }></CattleDetailsInfo>
               <CattleDetailsImages images = { data.images }></CattleDetailsImages>
               <CattleDetailsDecency data = { decency }></CattleDetailsDecency>
            </div>
        </MainLayout>
    )
}

export default CattleDetails;