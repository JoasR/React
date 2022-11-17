import React from "react";

function Timer(props){
    const [seconds, setSeconds] = React.useState(0)
    const [minutes, setMinutes] = React.useState(0)

    let timer; 
    
    React.useEffect(() => {
        if(!props.tenzies){
            setSeconds(0)
            setMinutes(0)
        }
        if(!props.stopTimer){
            timer = setInterval(() => {
                setSeconds(oldSeconds => oldSeconds + 1)
            }, 1000)
        }
        return () => {
            clearInterval(timer)
        }
    }, [!props.stopTimer])

    function formatSeconds(){
        return ("0" + seconds).slice(-2)
    }

    function formatMinutes(){
        if(seconds === 59){
            setMinutes(oldMinutes => oldMinutes + 1)
            setSeconds(0)
        }
        return ("0" + minutes).slice(-2)
    }

    React.useEffect(() => {
        if(props.tenzies){
            if(localStorage.getItem("bestTimeMinutes") === null && localStorage.getItem("bestTimeSeconds") === null){
                localStorage.setItem('bestTimeMinutes', JSON.stringify(minutes))
                localStorage.setItem("bestTimeSeconds", JSON.stringify(seconds))
            } else if(minutes <= parseInt(JSON.parse(localStorage.getItem("bestTimeMinutes"))) && seconds < parseInt(localStorage.getItem("bestTimeSeconds"))){
                localStorage.setItem('bestTimeMinutes', JSON.stringify(minutes))
                localStorage.setItem("bestTimeSeconds", JSON.stringify(seconds))
            }
        }
    }, [props.stopTimer])

    return(
        <>
            <h1>{formatMinutes()} : {formatSeconds()}</h1>
            {localStorage.getItem("bestTimeMinutes")!== null && <h2>Best Time: {localStorage.getItem("bestTimeMinutes")}:{localStorage.getItem("bestTimeSeconds")}</h2>}
        </>
    )
}
export default Timer