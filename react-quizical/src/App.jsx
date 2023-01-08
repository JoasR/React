import React from "react"
import { Question } from "./components/Question"
import { nanoid } from "nanoid"

export const App = () => {
    const [isGameStarted, setIsGameStarted] = React.useState(false)
    const [selectedAnswer, setSelectedAnswer] = React.useState("")
    const [answerCount, setAnswerCount] = React.useState(0)
    const [showErrorMessage, setShowErrorMessage] = React.useState(false)
    const [playAgain, setPlayAgain] = React.useState(false)
    const [scoreCount, setScoreCount] = React.useState(0)
    
    //To make sure new Questions get generated when play again is pressed
    const [playANewGame, setPlayANewGame] = React.useState(true)

    const startGame = () => {
        setIsGameStarted(true)
    }

    const[allTriviaQuestions, setAllTriviaQuestions] = React.useState([])
    React.useEffect(() => {
        async function getAllTriviaQuestions(){
            const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            const data = await res.json()
            let questions = []
            data.results.forEach(question => {
                questions.push({
                    ...question,
                    id: nanoid(),
                    selectedAnswer: selectedAnswer, 
                    shuffledTriviaAnswers: shuffle([...question.incorrect_answers, question.correct_answer])
                })
            });
            setAllTriviaQuestions(questions)
        }
        getAllTriviaQuestions()
    }, [playANewGame])

    function handleSelectedAnswer(id, answer){
        allTriviaQuestions.forEach(question => {
            if(question.id === id){
                setAllTriviaQuestions(prevState => prevState.map(prevQuestion => {
                    if(prevQuestion.id === id){
                        return {
                            ...prevQuestion,
                            selectedAnswer: answer
                        }
                    } else {
                        return {
                            ...prevQuestion
                        }
                    }
                }))
                setSelectedAnswer(answer)
            } else {
                return
            }
        });
    }

    function shuffle(array){
        let shuffledTriviaAnswers = array.sort(function(){
            return Math.random() - 0.5
        })
        return shuffledTriviaAnswers
    }
    

    const questionElements = allTriviaQuestions.map(question => {
        
        return <Question key={question.id} id={question.id} selectedAnswer={question.selectedAnswer} handleSelectedAnswer={handleSelectedAnswer} triviaQuestion={question.question} allTriviaAnswers={question.shuffledTriviaAnswers} incorrectAnswers={question?.incorrect_answers} correctAnswer={question?.correct_answer} playAgain={playAgain}/>
    })

    function restartQuiz(){
        setIsGameStarted(false)
        setPlayAgain(false)
        setAnswerCount(0)
        setScoreCount(0)
        setShowErrorMessage(false)
        setPlayANewGame(prevState => !prevState)
    }

    function check(){
            let score = 0
            let amountOfAnswers = 0
            allTriviaQuestions.forEach(question => {
                question.selectedAnswer === question.correct_answer ? score++ : score += 0
                question.selectedAnswer === "" ? amountOfAnswers += 0 : amountOfAnswers++
            });
            setAnswerCount(amountOfAnswers)
            setScoreCount(score)
            amountOfAnswers !== allTriviaQuestions.length ? setShowErrorMessage(true) : setShowErrorMessage(false)
            amountOfAnswers === allTriviaQuestions.length ? setPlayAgain(true) : setPlayAgain(false)    
    }
    
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
                    {showErrorMessage && <h4 className="error-message">Please answer all the questions</h4>}
                    {
                        playAgain && 
                        <>
                            <p className="score-message">You scored {scoreCount}/{allTriviaQuestions.length}</p>
                            <button onClick={restartQuiz} className="check-answers-btn">Play Again</button>
                        </>
                    }

                    {!playAgain && <button onClick={check} className="check-answers-btn">Check Answers</button>}
                </div>
            }
        </div>
    )
}