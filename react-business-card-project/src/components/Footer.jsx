import React from "react";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-icons">
                <FontAwesomeIcon icon={ faTwitter }/>
                <FontAwesomeIcon icon={ faFacebook }/>
                <FontAwesomeIcon icon={ faInstagram }/>
                <FontAwesomeIcon icon={ faGithub }/>
            </div>
        </div>
    )
}
export default Footer