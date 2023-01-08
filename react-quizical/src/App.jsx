import React from "react"
import { Question } from "./components/Question"
import { nanoid } from "nanoid"

export const App = () => {
    const[isGameStarted, setIsGameStarted] = React.useState(false)

    const startGame = () => {
        setIsGameStarted(true)
    }

    const[allTriviaQuestions, setAllTriviaQuestions] = React.useState([])
    React.useEffect(() => {
        async function getAllTriviaQuestions(){
            const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            const data = await res.json()
            setAllTriviaQuestions(data.results)
        }
        getAllTriviaQuestions()
    }, [])
    

    const questionElements = allTriviaQuestions.map(question => {
        const allTriviaAnswers = [question?.correct_answer, ...question?.incorrect_answers]
        let shuffledTriviaAnswers = allTriviaAnswers.sort(function(){
            return Math.random() - 0.5
        })
        return <Question key={nanoid()} triviaQuestion={question.question} allTriviaAnswers={shuffledTriviaAnswers} incorrectAnswers={question?.incorrect_answers} correctAnswer={question?.correct_answer}/>
    })
    
    return(
        <div className="game-container">
            {!isGameStarted 
                ? <div> 
                    <h1 className="game-title">Quizical</h1>
                    <h4 className="game-description">A small App to test you with some Trivia questions</h4>
                    <button onClick={startGame} className="start-game-btn">Start Quiz</button>
                </div>
                : <div className="quiz-container">
                    <div className="question-container">
                        {questionElements}
                    </div>
                    <button className="check-answers-btn">Check Answers</button>
                </div>
            }
        </div>
    )
}