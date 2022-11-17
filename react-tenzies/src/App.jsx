import React from "react";
import Die from "./components/Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti";
import Timer from "./components/Timer";

function App(){
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)
  const [rollCount, setRollCount] = React.useState(0)
  const [stopTimer, setStopTimer] = React.useState(false)

  React.useEffect(() => {
    //Check if all dice isHeld property is true
    const allHeld = dice.every(die => die.isHeld)
    //Check if all the dice values are the same
    const allSameValue = dice.every(die => die.value === dice[0].value)

    if(allHeld && allSameValue){
      setTenzies(true)
      setStopTimer(true)
    }

    if(!allHeld || !allSameValue){
      setTenzies(false)
      setStopTimer(false)
    }
  }, [dice])

  function generateNewDie(){
    return {
      id:nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false
    }
  }

  function allNewDice(){
    const diceArray = []
    for (let i = 0; i < 10; i++) {
      diceArray.push(generateNewDie())
    }
    return diceArray
  }

  function rollDice(){
    if(!tenzies){
      setDice(oldDice => {
        return oldDice.map(die => {
          return die.isHeld ? die : generateNewDie()
        })
      })
      setRollCount(oldRollCount => oldRollCount +1)
    } else {
      setTenzies(false)
      setDice(allNewDice())
      setRollCount(0)
    }
  }
  
  function holdDice(dieId){
    setDice(oldDice => {
      return oldDice.map(die => {
        return die.id === dieId ? { ...die, isHeld: !die.isHeld } : die
      })
    })
  }

  const diceElements = dice.map(die => {
    return(
      <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)}/>
    )
  })

  return(
    <main className="main-container">
      {tenzies && <Confetti /> }
      <h1 className="title">Tenzies</h1>
      <p className="instructions">{tenzies ? "Congratulations! You have won the Tenzies game!" : "Roll untill all dice are the same. Click each die to freeze it at its current value between rolls."}</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <div onClick={rollDice} className="roll-dice-btn">{tenzies ? "New Game" : "Roll"}</div>
      <h1 className="title">Roll Count: {rollCount}</h1>
      <Timer stopTimer={stopTimer} tenzies={tenzies} />
    </main>  
  )
}
export default App