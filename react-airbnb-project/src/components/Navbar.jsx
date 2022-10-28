import React from "react";
import airBnbLogo from "../assets/airbnb-logo.png";

function Navbar(){
    return(
        <nav className="nav-bar">
            <img className="airbnb-logo" src={ airBnbLogo } alt="" />
        </nav>
    )
}

export default Navbar