import React from 'react'
import "./Styles/tables.scss";

import complete from '../static/images/svgs/Complete.svg';
import uncomplete from '../static/images/svgs/Uncomplete.svg';

function TripsTable(props) {
    return (
        <div class="tripsData__table">
            <table>
              <tr class="table__header">
                <th class="table__header--borderLeft">Fecha</th>
                <th>Tipo</th>
                <th>Negociante</th>
                <th>Lugar</th>
                <th>Cantidad</th>
                <th>Valor</th>
                <th class="table__header--borderRight">ID's Asignados</th>
              </tr>
              <tr>
                <td class="table__header--borderLeft">12/12/12</td>
                <td>Compra</td>
                <td>Nombre1</td>
                <td>Yopal</td>
                <td>14</td>
                <td>20.000.000</td>
                <td class="table__header--borderRight">
                  <i class="check_IDs"
                    ><img src = { complete } alt=""
                  /></i>
                </td>
              </tr>
              <tr>
                <td class="table__header--borderLeft">12/12/12</td>
                <td>Compra</td>
                <td>Nombre1</td>
                <td>Yopal</td>
                <td>14</td>
                <td>20.000.000</td>
                <td class="table__header--borderRight">
                  <i class="check_IDs"
                    ><img
                      src={ uncomplete }
                      alt=""
                  /></i>
                </td>
              </tr>
              <tr>
                <td class="table__header--borderLeft">12/12/12</td>
                <td>Compra</td>
                <td>Nombre1</td>
                <td>Yopal</td>
                <td>14</td>
                <td>20.000.000</td>
                <td class="table__header--borderRight">True</td>
              </tr>
              <tr>
                <td class="table__header--borderLeft">12/12/12</td>
                <td>Compra</td>
                <td>Nombre1</td>
                <td>Yopal</td>
                <td>14</td>
                <td>20.000.000</td>
                <td class="table__header--borderRight">True</td>
              </tr>
              <tr>
                <td class="table__header--borderLeft">12/12/12</td>
                <td>Compra</td>
                <td>Nombre1</td>
                <td>Yopal</td>
                <td>14</td>
                <td>20.000.000</td>
                <td class="table__header--borderRight">True</td>
              </tr>
              <tr>
                <td class="table__header--borderLeft">12/12/12</td>
                <td>Compra</td>
                <td>Nombre1</td>
                <td>Yopal</td>
                <td>14</td>
                <td>20.000.000</td>
                <td class="table__header--borderRight">True</td>
              </tr>
            </table>
          </div>
          
    )
}

export default TripsTable;