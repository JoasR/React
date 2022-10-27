import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function EmailButton(){
    return(
        <a href="#" className="email-button">
            <FontAwesomeIcon className="envelope-icon" icon={ faEnvelope } />
            <p className="email-text">Email</p>
        </a>
    )
}
export default EmailButton