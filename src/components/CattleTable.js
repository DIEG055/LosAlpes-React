import React from "react";
import { Link } from "react-router-dom";

import "./Styles/tables.scss";
import "./Styles/trips.scss";
import "./Styles/buttons.scss";

function CattleTable(props) {
  return (
    
      <table>
        <thead>
          <tr className="table__header">
            <th className="table__header--borderLeft">ID</th>
            <th>Edad</th>
            <th>Genero</th>
            <th>Valor Compra</th>
            <th>Procedencia</th>
            <th>Estado</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, index) => {
            return (
              <tr key={index}>
                <td className="table__header--borderLeft">{item.id}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                {/* <td>{item.gender}</td> */}
                <td>{item.price}</td>
                <td>{item.place}</td>
                <td>{item.state}</td>
                <td className="table__header--borderRight">
                  <div className="detailsButton">
                    <Link to={ `cattle/${item.id}` }>
                    <button>Ver</button>
                    </Link>
                    
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
        
      </table>
   
  );
}

export default CattleTable;
