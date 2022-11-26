import React from "react"
import { decode } from "html-entities"
import { nanoid } from "nanoid"

export const Question = (props) => {
    const allTriviaAnswers = [props.correctAnswer, ...props.incorrectAnswers]
    
        let shuffledTriviaAnswers = allTriviaAnswers.sort(function(){
            return Math.random() - 0.5
        })

        const answerElements = shuffledTriviaAnswers.map(answer => {
            return <button key={nanoid()} className="answer">{answer}</button>
        })

    return (
        <div className="question-container">
            <h2 className="question">{decode(props.triviaQuestion)}</h2>
            <div className="answer-container">
                {answerElements}
            </div>
            <hr className="line"/>
        </div>
    )
}