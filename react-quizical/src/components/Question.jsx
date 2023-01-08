import React from "react"
import { decode } from "html-entities"
import { nanoid } from "nanoid"

export const Question = (props) => {

    const [questionSelected, setQuestionSelected] = React.useState(props.selectedAnswer)

    const setAnswer = (answer) => {
        if(answer !== props.selectedAnswer){
            props.handleSelectedAnswer(props.id, answer)
            setQuestionSelected(answer)
        }
        else {
            props.handleSelectedAnswer(props.id, "")
            setQuestionSelected("")
        }
    }

    const answerElement = props.allTriviaAnswers.map(answer => {
        let styleId = null
        if(props.playAgain){
            if(props.correctAnswer === answer){
                styleId = "correct"
            } else if(props.selectedAnswer === answer){
                styleId = "incorrect"
            } else {
                styleId = "not-selected"
            }
        }
        return <button id={styleId} disabled={props.playAgain} onClick={() => setAnswer(answer)} key={nanoid()} className={questionSelected === answer ? "answer answerSelected" : "answer"}>{decode(answer)}</button>
    })

    return (
        <div className="question-container">
            <h2 className="question">{decode(props.triviaQuestion)}</h2>
            <div className="answer-container">
                {answerElement}
            </div>
            <hr className="line"/>
        </div>
    )
}