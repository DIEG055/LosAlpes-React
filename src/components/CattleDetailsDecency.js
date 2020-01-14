import React from 'react'
import "./Styles/cattleDetails.scss";
import "./Styles/tables.scss";
import CattleTable from "./CattleTable"

function CattleDetailsDecency (props) {
    return (
        <div class="cattleDetails__Data">
        <div class="cattleDecencyData__table">
          <h3>Descendencia</h3>
          <CattleTable data={props.data}></CattleTable> </div>
      </div>
    )
}

export default CattleDetailsDecency;