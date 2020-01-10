import React from 'react'
import "./Styles/cattleDetails.scss";
import "./Styles/tables.scss";

function CattleDetailsDecency (props) {
    return (
        <div class="cattleDetails__Data">
        <div class="cattleDecencyData__table">
          <h3>Descendencia</h3>
          <table >
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
      </div>
    )
}

export default CattleDetailsDecency;