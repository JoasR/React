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
    const [category, setCategory] = React.useState("0")
    const [difficulty, setDifficulty] = React.useState("0")
    const [type, setType] = React.useState("0")
    
    //To make sure new Questions get generated when play again is pressed
    const [playANewGame, setPlayANewGame] = React.useState(true)

    const startGame = () => {
        setIsGameStarted(true)
    }

    const[allTriviaQuestions, setAllTriviaQuestions] = React.useState([])
    React.useEffect(() => {
        async function getAllTriviaQuestions(){
            const res = await fetch(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=${type}`)
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
    }, [playANewGame, category, difficulty, type])

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
        setSelectedAnswer("")
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

    const handleChange = (e) => {
        const {name, value} = e.target

        if(name === "category"){
            setCategory(value)
        }

        if(name === "difficulty"){
            setDifficulty(value)
        }

        if(name === "type"){
            setType(value)
        }
    }
    
    return(
        <div className="game-container">
            {!isGameStarted 
                ? <div> 
                    <h1 className="game-title">Quizical</h1>
                    <h4 className="game-description">A small App to test you with some Trivia questions</h4>
                    <div className="config-container">
                        <label className="config-label">Category:</label>
                        <select name="category" value={category} onChange={handleChange} className="config-select">
                            <option disabled>Select Category</option>
                            <option value="0">Any Category</option>
                            <option value="9">General Knowledge</option>
                            <option value="10">Books</option>
                            <option value="11">Film</option>
                            <option value="12">Music</option>
                            <option value="13">Musicals and Theatres</option>
                            <option value="14">Television</option>
                            <option value="15">Video Games</option>
                            <option value="16">Board Games</option>
                            <option value="17">Science and Nature</option>
                            <option value="18">Computers</option>
                            <option value="19">Mathematics</option>
                            <option value="20">Mythology</option>
                            <option value="21">Sports</option>
                            <option value="22">Geography</option>
                            <option value="23">History</option>
                            <option value="24">Politics</option>
                            <option value="25">Art</option>
                            <option value="26">Celebrities</option>
                            <option value="27">Animals</option>
                            <option value="28">Vehicles</option>
                            <option value="29">Comics</option>
                            <option value="30">Gadgets</option>
                            <option value="32">Cartoon & Animation</option>
                        </select>
                        <label className="config-label">Difficulty:</label>
                        <select name="difficulty" value={difficulty} onChange={handleChange} className="config-select">
                            <option disabled>Choose the difficulty of the questions</option>
                            <option value="0">Any Difficulty</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                        <label className="config-label">Type: (Multiple Choise, True / False)</label>
                        <select name="type" value={type} onChange={handleChange} className="config-select">
                            <option disabled>Choose the type of questions (multiple choise, true/false)</option>
                            <option value="0">Any Type</option>
                            <option value="mutliple">Multiple Choise</option>
                            <option value="boolean">True / False</option>
                        </select>
                    </div>
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