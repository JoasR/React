import React from "react"
import reactLogo from "../assets/react-icon-small.png"

function NavBar(){
    return(
        <nav className="nav-bar">
            <img className="react-logo" src={reactLogo} alt="" />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}

export default NavBar