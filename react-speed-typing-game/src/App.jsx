import React, {useState, useEffect, useRef} from "react"

function App(){
  const GAME_DURATION = 15

  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(GAME_DURATION)
  const [isGameRunning, setIsGameRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  
  const textAreaRef = useRef(null)

  useEffect(() => {
    if(timeRemaining > 0 && isGameRunning){
      setTimeout(() => {
        setTimeRemaining(prevTime => prevTime - 1)
      }, 1000);
    } else if(timeRemaining === 0){
      endGame()
    }
  }, [timeRemaining, isGameRunning])

  function handleChange(event){
    const {value} = event.target
    setText(value)
  }

  function calculateWordCount(fullText){
    const wordsArray = fullText.trim().split(" ")
    const filteredWords = wordsArray.filter(word => word != "")
    return filteredWords.length
  }

  function startGame(){
    setIsGameRunning(true)
    setTimeRemaining(GAME_DURATION)
    setWordCount(0)
    setText("")
    textAreaRef.current.disabled = false // textArea.current.focus() does not just work because it tries to put focus on a disabled textarea, thats why this line is needed
    textAreaRef.current.focus()
  }

  function endGame(){
    setIsGameRunning(false)
    setWordCount(calculateWordCount(text))
  }

  return(
    <div>
      <h1>Speed Typing Game: How fast do you type?</h1>
      <textarea ref={textAreaRef} className={isGameRunning ? "fullColor" : "greyOut"} disabled={!isGameRunning} onChange={handleChange} value={text}/>
      <h4>Time remaining: {timeRemaining}</h4>
      <button className={isGameRunning ? "removeHover" : "addHover"} disabled={isGameRunning} onClick={startGame}>Start Game</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  )
}
export default App