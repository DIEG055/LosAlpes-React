import React from "react";
import { Link } from "react-router-dom";

import "./Styles/tables.scss";
import "./Styles/trips.scss";
import "./Styles/buttons.scss";

function CattleTable(props) {
  return (
    <div className="tripsData__table">
      <table>
        <tr className="table__header">
          <th className="table__header--borderLeft">ID</th>
          <th>Edad</th>
          <th>Genero</th>
          <th>Valor Compra</th>
          <th>Procedencia</th>
          <th>Estado</th>
          <th>Detalles</th>
          <th className="table__header--borderRight">ID's Asignados</th>
        </tr>
        <tr>
          <td className="table__header--borderLeft">12/12/12</td>
          <td>Compra</td>
          <td>Nombre1</td>
          <td>Yopal</td>
          <td>Yopal</td>
          <td>14</td>
          <td>20.000.000</td>
          <td className="table__header--borderRight">
            <div className="detailsButton">
              <button>Ver</button>
            </div>
          </td>
        </tr>
        <tr>
          <td className="table__header--borderLeft">12/12/12</td>
          <td>Compra</td>
          <td>Nombre1</td>
          <td>Yopal</td>
          <td>Yopal</td>
          <td>14</td>
          <td>20.000.000</td>
          <td className="table__header--borderRight">
            <div className="detailsButton">
              <button>Ver</button>
            </div>
          </td>
        </tr>
        <tr>
          <td className="table__header--borderLeft">12/12/12</td>
          <td>Compra</td>
          <td>Nombre1</td>
          <td>Yopal</td>
          <td>Yopal</td>
          <td>14</td>
          <td>20.000.000</td>
          <td className="table__header--borderRight">
            <div className="detailsButton">
              <button>Ver</button>
            </div>
          </td>
        </tr>
        <tr>
          <td className="table__header--borderLeft">12/12/12</td>
          <td>Compra</td>
          <td>Nombre1</td>
          <td>Yopal</td>
          <td>Yopal</td>
          <td>14</td>
          <td>20.000.000</td>
          <td className="table__header--borderRight">
            <div className="detailsButton">
              <button>Ver</button>
            </div>
          </td>
        </tr>
        <tr>
          <td className="table__header--borderLeft">12/12/12</td>
          <td>Compra</td>
          <td>Nombre1</td>
          <td>Yopal</td>
          <td>Yopal</td>
          <td>14</td>
          <td>20.000.000</td>
          <td className="table__header--borderRight">
              <div className="detailsButton" >
            <Link to="/cattle/1" >
              <button>Ver</button>
            </Link>
              </div>
                
              
          </td>
        </tr>
      </table>
    </div>
  );
}

export default CattleTable;
