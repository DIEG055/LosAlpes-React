import React from 'react'
import "./Styles/cattleDetails.scss";
import "./Styles/tables.scss";
import CattleTable from "./CattleTable"

function CattleDetailsDecency (props) {
    return (
        <div className="cattleDetails__Data">
        <div className="cattleDecencyData__table">
          <h3>Descendencia</h3>
          <CattleTable data={props.data}></CattleTable> </div>
      </div>
    )
}

export default CattleDetailsDecency;