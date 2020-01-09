import React from 'react'

import "./Styles/Navbar.scss";

function Navbar (props) {
    return (
        <nav>
        <div class="logo">
          <h4>The Nav</h4>
        </div>
        <ul class="nav-links">
          <li><a href="#">Ganado</a></li>
          <li><a href="#">Viajes</a></li>
          <li><a href="#">Finca</a></li>
          <li><a href="#">Vacunación</a></li>
        </ul>
        <div class="burger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </nav>
    )
}

export default Navbar;