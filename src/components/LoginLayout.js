import React from 'react'

import "./Styles/styles.scss";
function LoginContainer(props){
    return (
        <section className="loginBackground">
            { props.children }
        </section>
    )
}

export default LoginContainer;