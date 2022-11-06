import React from "react";
import trollFace from "../assets/troll-face.png"

function NavBar(){
    return(
        <nav className="nav-container">
            <img className="nav-troll-image" src={ trollFace } alt="" />
            <h1 className="nav-title">Meme Generator</h1>
            <h3 className="nav-course">React Course - Project 3</h3>
        </nav>
    )
}
export default NavBar