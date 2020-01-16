import React from "react";
import "./Styles/tables.scss";
import "./Styles/trips.scss";
import "./Styles/buttons.scss";
import { Link } from "react-router-dom";


function TripDetailsTable(props) {
  const data = props.cattle.filter(item => props.id === item.tripId);

  return (
    <div className="tripsData__table">
      <table>
        <thead>
          <tr className="table__header">
            <th className="table__header--borderLeft">ID</th>
            <th>Fecha Compra</th>
            <th>Lugar</th>
            <th>Genero</th>
            <th>Valor</th>
            <th className="table__header--borderRight">Detalles</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key= {index}>
                <td className="table__header--borderLeft">{item.id}</td>
                <td>{item.arrivalDate}</td>
                <td>{item.origin}</td>
                <td>{item.gender}</td>
                <td>{item.purchaseValue}</td>
                <td>
                  <div className="detailsButton">
                  <Link to={ `/cattle/${item.id}` }>
                    <button>Ver</button>
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TripDetailsTable;
