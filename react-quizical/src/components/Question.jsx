import React from "react"
import { decode } from "html-entities"
import { nanoid } from "nanoid"

export const Question = (props) => {
    
    const [selectedAnswer, setSelectedAnswer] = React.useState("")

    function selectAnswer(answer){
        if(selectedAnswer !== answer){
            setSelectedAnswer(answer)
        } else {
            setSelectedAnswer("")
        }
    }

    const answerElements = props.allTriviaAnswers.map(answer => {
        return <button onClick={() => selectAnswer(answer)} key={nanoid()} className={selectedAnswer === answer ? "answer answerSelected" : "answer"}>{answer}</button>
    })
    function checkAnswer(){
        if(selectedAnswer === props.correctAnswer){
            console.log("correct")
        }
        else{
            console.log("wrong");
        }
    }

    return (
        <div className="question-container">
            <h2 className="question">{decode(props.triviaQuestion)}</h2>
            <div className="answer-container">
                {answerElements}
            </div>
            <button onClick={checkAnswer}>check answer</button>
            <hr className="line"/>
        </div>
    )
}