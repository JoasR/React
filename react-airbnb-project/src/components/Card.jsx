import React from "react";
import starIcon from "../assets/star.png"

function Card(props){
    return(
        <div className="card-container">
            <p className="card-sold">SOLD OUT</p>
            <img className="card-photo" src={`../../src/assets/${props.img}`} alt="" />
            <div className="card-rating">
                <img className="card-star-icon" src={ starIcon } alt="" />
                <h4><span className="bold">{props.rating}</span> ({props.reviewCount}) - {props.country}</h4>
            </div>
            <p className="card-text">{props.title}</p>
            <h3 className="card-price"><span className="bold">From €{props.price}</span> / person</h3>
        </div>
    )
}
export default Card