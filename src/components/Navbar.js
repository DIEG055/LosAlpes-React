import React from 'react'
import { Link } from "react-router-dom";

import "./Styles/Navbar.scss";

function Navbar (props) {
    return (
        <nav>
        <Link to="/home">
        <div className="logo">
          <h4>The Nav</h4>
        </div>
        </Link>
        <ul className="nav-links">
          <li><Link to="/cattle">Ganado</Link></li>
          <li><Link to="/trip">Viajes</Link></li>
          <li><Link to="/home">Finca</Link></li>
          <li><Link to="/home">Vacunación</Link></li>
        </ul>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    )
}

export default Navbar;