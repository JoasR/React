import React from "react";
import Die from "./components/Die"
import {nanoid} from "nanoid"

function App(){
  const [diceNumbers, setDiceNumbers] = React.useState(allNewDice())

  function allNewDice(){
    const diceArray = []
    for (let i = 0; i < 10; i++) {
      let diceValue = Math.ceil(Math.random() * 6)
      diceArray.push({
        id: nanoid(),
        value: diceValue, 
        isHeld: true
      })
    }
    return diceArray
  }

  function rollDice(){
    setDiceNumbers(allNewDice())
  }

  const diceElements = diceNumbers.map(die => {
    return(
      <Die key={die.id} value={die.value} isHeld={die.isHeld} />
    )
  })

  return(
    <main className="main-container">
      <div className="dice-container">
        {diceElements}
      </div>
      <div onClick={rollDice} className="roll-dice-btn">Roll</div>
    </main>  
  )
}
export default App