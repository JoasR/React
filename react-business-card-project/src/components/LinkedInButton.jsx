import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function LinkedInButton(){
    return(
        <a href="#" className="linkedin-button">
            <FontAwesomeIcon className="linkedin-icon" icon={ faLinkedin } />
            <p className="linkedin-text">LinkedIn</p>
        </a>
    )
}
export default LinkedInButton