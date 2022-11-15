import React from "react";

function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "#59e391" : "#fff"
    }
    return(
            <div className="die" style={styles}>{props.value}</div>
    )
}
export default Die