import React from "react";
import cardPhoto from "../assets/katie-zaferes.png"
import starIcon from "../assets/star.png"

function Card(){
    return(
        <div className="card-container">
            <p className="card-sold">SOLD OUT</p>
            <img className="card-photo" src={ cardPhoto } alt="" />
            <div className="card-rating">
                <img className="card-star-icon" src={ starIcon } alt="" />
                <h4><span className="bold">5.0</span> (6)-USA</h4>
            </div>
            <p className="card-text">Life lessons with katie Zaferes</p>
            <h3 className="card-price"><span className="bold">From €136</span> / person</h3>
        </div>
    )
}
export default Card