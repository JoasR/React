import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEarthEurope} from '@fortawesome/free-solid-svg-icons'

function NavBar(){
    return(
        <nav className="nav-container">
            <FontAwesomeIcon className="nav-globe-icon" icon={faEarthEurope} />
            <h2 className="nav-text">My Travel Journal</h2>
        </nav>
    )
}
export default NavBar