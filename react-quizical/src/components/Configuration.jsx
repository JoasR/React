import React from "react";

const Configuration = (props) => {
    return(
        <div> 
            <h1 className="game-title">Quizical</h1>
            <h4 className="game-description">A small App to test you with some Trivia questions</h4>
            <button onClick={() => props.startGame} className="start-game-btn">Start Quiz</button>
        </div>
    )
}
export default Configuration