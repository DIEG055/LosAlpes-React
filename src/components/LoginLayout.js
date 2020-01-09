import React from 'react'

import "./Styles/styles.scss";
function LoginLayout(props){
    return (
        <section className="loginBackground">
            { props.children }
        </section>
    )
}

export default LoginLayout;