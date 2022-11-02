import React from "react";
import starIcon from "../assets/star.png"

function Card(props){
    let badgeText
    if (props.data.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.data.location === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="card-container">
            {badgeText && <p className="card-sold">{badgeText}</p>}
            <img className="card-photo" src={`../../src/assets/${props.data.coverImg}`} alt="" />
            <div className="card-rating">
                <img className="card-star-icon" src={ starIcon } alt="" />
                <h4><span className="bold">{props.data.stats.rating.toFixed(1)}</span> ({props.data.stats.reviewCount}) - {props.data.location}</h4>
            </div>
            <p className="card-text">{props.data.title}</p>
            <h3 className="card-price"><span className="bold">From €{props.data.price}</span> / person</h3>
        </div>
    )
}
export default Card