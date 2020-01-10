import React from 'react'
import "./Styles/tables.scss";
import "./Styles/trips.scss";
import "./Styles/buttons.scss";


function TripDetailsTable (props){
    return (
        <div class="tripsData__table">
        <table>
          <tr class="table__header">
            <th class="table__header--borderLeft">ID</th>
            <th>Fecha Compra</th>
            <th>Lugar</th>
            <th>Genero</th>
            <th>Valor</th>
            <th class="table__header--borderRight">Detalles</th>
          </tr>
          <tr>
            <td class="table__header--borderLeft">121</td>
            <td>12/12/19</td>
            <td>Yopal</td>
            <td>Macho</td>
            <td>1.400.000</td>
            <td>
              <div class="detailsButton">
                <button>Ver</button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table__header--borderLeft">121</td>
            <td>12/12/19</td>
            <td>Yopal</td>
            <td>Macho</td>
            <td>1.400.000</td>
            <td>
              <div class="detailsButton">
                <button>Ver</button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table__header--borderLeft">121</td>
            <td>12/12/19</td>
            <td>Yopal</td>
            <td>Macho</td>
            <td>1.400.000</td>
            <td>
              <div class="detailsButton">
                <button>Ver</button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table__header--borderLeft">121</td>
            <td>12/12/19</td>
            <td>Yopal</td>
            <td>Macho</td>
            <td>1.400.000</td>
            <td>
              <div class="detailsButton">
                <button>Ver</button>
              </div>
            </td>
          </tr>


        </table>
      </div>
    
    )
}

export default TripDetailsTable;