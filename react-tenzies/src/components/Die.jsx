import React from "react";
import { nanoid } from "nanoid";

function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "#59e391" : "#fff"
    }

    function decideDots(){
        let dots = []
        switch(props.value){
            case 1:
                dots.push(
                    <div key={nanoid()} className="dot middle-row center-column"></div>, 
                )
                break;
            case 2:
                dots.push(
                    <div key={nanoid()} className="dot top-row left-column"></div>, 
                    <div key={nanoid()} className="dot bottom-row right-column"></div>
                )
                break;
            case 3:
                dots.push(
                    <div key={nanoid()} className="dot top-row left-column"></div>, 
                    <div key={nanoid()} className="dot middle-row center-column"></div>, 
                    <div key={nanoid()} className="dot bottom-row right-column"></div>
                )
                break;
            case 4: 
                dots.push(
                    <div key={nanoid()} className="dot top-row left-column"></div>, 
                    <div key={nanoid()} className="dot top-row right-column"></div>, 
                    <div key={nanoid()} className="dot bottom-row left-column"></div>, 
                    <div key={nanoid()} className="dot bottom-row right-column"></div>
                )
                break;
            case 5:
                dots.push(
                    <div key={nanoid()} className="dot top-row left-column"></div>, 
                    <div key={nanoid()} className="dot top-row right-column"></div>, 
                    <div key={nanoid()} className="dot middle-row center-column"></div>, 
                    <div key={nanoid()} className="dot bottom-row left-column"></div>, 
                    <div key={nanoid()} className="dot bottom-row right-column"></div>
                )
                break;
            case 6: 
                dots.push(
                    <div key={nanoid()} className="dot top-row left-column"></div>, 
                    <div key={nanoid()} className="dot top-row right-column"></div>, 
                    <div key={nanoid()} className="dot middle-row left-column"></div>,
                    <div key={nanoid()} className="dot middle-row right-column"></div>, 
                    <div key={nanoid()} className="dot bottom-row left-column"></div>, 
                    <div key={nanoid()} className="dot bottom-row right-column"></div>
                )
                break;
        }
        return dots
    }
    return(
            <div className="face" style={styles} onClick={props.holdDice}>
                {decideDots()}
            </div>
    )
}
export default Die