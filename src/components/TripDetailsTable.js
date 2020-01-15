import React from 'react'
import "./Styles/tables.scss";
import "./Styles/trips.scss";
import "./Styles/buttons.scss";


function TripDetailsTable (props){
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
          <tr>
            <td className="table__header--borderLeft">121</td>
            <td>12/12/19</td>
            <td>Yopal</td>
            <td>Macho</td>
            <td>1.400.000</td>
            <td>
              <div className="detailsButton">
                <button>Ver</button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="table__header--borderLeft">121</td>
            <td>12/12/19</td>
            <td>Yopal</td>
            <td>Macho</td>
            <td>1.400.000</td>
            <td>
              <div className="detailsButton">
                <button>Ver</button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="table__header--borderLeft">121</td>
            <td>12/12/19</td>
            <td>Yopal</td>
            <td>Macho</td>
            <td>1.400.000</td>
            <td>
              <div className="detailsButton">
                <button>Ver</button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="table__header--borderLeft">121</td>
            <td>12/12/19</td>
            <td>Yopal</td>
            <td>Macho</td>
            <td>1.400.000</td>
            <td>
              <div className="detailsButton">
                <button>Ver</button>
              </div>
            </td>
          </tr>


          </tbody>
        </table>
      </div>
    
    )
}

export default TripDetailsTable;