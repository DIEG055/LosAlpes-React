import React from "react";

import "./Styles/tables.scss";
import "./Styles/trips.scss";
import "./Styles/buttons.scss";

function CattleTable(props) {
  return (
    <div class="tripsData__table">
      <table>
        <tr class="table__header">
          <th class="table__header--borderLeft">ID</th>
          <th>Edad</th>
          <th>Genero</th>
          <th>Valor Compra</th>
          <th>Procedencia</th>
          <th>Estado</th>
          <th>Detalles</th>
          <th class="table__header--borderRight">ID's Asignados</th>
        </tr>
        <tr>
          <td class="table__header--borderLeft">12/12/12</td>
          <td>Compra</td>
          <td>Nombre1</td>
          <td>Yopal</td>
          <td>Yopal</td>
          <td>14</td>
          <td>20.000.000</td>
          <td class="table__header--borderRight">
            <div class="detailsButton">
              <button>Ver</button>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table__header--borderLeft">12/12/12</td>
          <td>Compra</td>
          <td>Nombre1</td>
          <td>Yopal</td>
          <td>Yopal</td>
          <td>14</td>
          <td>20.000.000</td>
          <td class="table__header--borderRight">
            <div class="detailsButton">
              <button>Ver</button>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table__header--borderLeft">12/12/12</td>
          <td>Compra</td>
          <td>Nombre1</td>
          <td>Yopal</td>
          <td>Yopal</td>
          <td>14</td>
          <td>20.000.000</td>
          <td class="table__header--borderRight">
            <div class="detailsButton">
              <button>Ver</button>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table__header--borderLeft">12/12/12</td>
          <td>Compra</td>
          <td>Nombre1</td>
          <td>Yopal</td>
          <td>Yopal</td>
          <td>14</td>
          <td>20.000.000</td>
          <td class="table__header--borderRight">
            <div class="detailsButton">
              <button>Ver</button>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table__header--borderLeft">12/12/12</td>
          <td>Compra</td>
          <td>Nombre1</td>
          <td>Yopal</td>
          <td>Yopal</td>
          <td>14</td>
          <td>20.000.000</td>
          <td class="table__header--borderRight">
            <div class="detailsButton">
              <button>Ver</button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default CattleTable;
