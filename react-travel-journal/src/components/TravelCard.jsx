import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"

function TravelCard(props){
    return(
        <div className="travel-card-container">
            <img className="travel-card-image" src={props.data.imageUrl} alt="" />
            <div className="travel-card-content">
                <div className="travel-card-location-container">
                    <FontAwesomeIcon className="travel-card-location-icon" icon={faLocationDot}/>
                    <h3 className="travel-card-location-country">{props.data.location}</h3>
                    <a href={props.data.googleMapsUrl} target="_blank" className="travel-card-location-maps">View on Google Maps</a>
                </div>
                <h1 className="travel-card-title">{props.data.title}</h1>
                <h4 className="travel-card-date">{props.data.startDate} - {props.data.endDate}</h4>
                <p className="travel-card-description">{props.data.description}</p>
            </div>
        </div>
    )
}
export default TravelCard