import React from "react";
import { Link } from "react-router-dom";

import "./Styles/tables.scss";
import "./Styles/buttons.scss";

import complete from "../static/images/svgs/Complete.svg";
import uncomplete from "../static/images/svgs/Uncomplete.svg";

function TripsTable(props) {
  
  return (
    <div className="tripsData__table">
      <table>
        <thead>
          <tr key="-1" className="table__header">
            <th className="table__header--borderLeft">Fecha</th>
            <th>Tipo</th>
            <th>Negociante</th>
            <th>Lugar</th>
            <th>Cantidad</th>
            <th>Valor</th>
            <th>ID's Asignados</th>
            <th className="table__header--borderRight">Detalles</th>
          </tr>
        </thead>
        <tbody>
        {console.log(props.data)
        }
        {props.data.trips.map((item, index) => {
          return (
              <tr key={index}>
                <td className="table__header--borderLeft">{item.date}</td>
                <td>{item.type}</td>
                <td>{item.dealer}</td>
                <td>{item.place}</td>
                <td>{item.amount}</td>
                <td>{item.price}</td>
                <td>
                  <i className="check_IDs">
                    <img src={item.ids ? complete : uncomplete} alt="" />
                  </i>
                </td>
                <td className="table__header--borderRight">
                  <div className="detailsButton">
                    <Link to={`trips/${item.id}`}>
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

export default TripsTable;
