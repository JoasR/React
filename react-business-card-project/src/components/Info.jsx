import React from "react";
import lion from "../assets/lion.jpg"
import EmailButton from "./EmailButton"
import LinkedInButton from "./LinkedInButton";

function Info(){
    return (
        <div className="info-container">
            <img className="lion-image" src={lion} alt="" />
            <h1 className="lion-title">African Lion</h1>
            <h3 className="lion-description">King of the Jungle</h3>
            <h4 className="lion-website">AfricanLion.com</h4>
            <div className="info-buttons">
                <EmailButton />
                <LinkedInButton />
            </div>
        </div>
    )
}
export default Info