import React from 'react'

import "./Styles/styles.scss";
import Navbar from "../components/Navbar";

function MainBackgroundContainer(props){
    return (
        <section className="mainBackground">
            <Navbar></Navbar>
            { props.children }
        </section>
    )
}

export default MainBackgroundContainer;