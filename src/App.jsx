import { useState } from 'react'
import Die from './Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {
  
  const [diceNumbers, setDiceNumbers] = useState(() => generateAllNewDice())

  const gameWon = diceNumbers.every(die => die.isHeld) && diceNumbers.every(die => die.value === diceNumbers[0].value)

  
  function generateAllNewDice() {
    const numArray = []
    for(let i=0;i<10;i++){
      numArray.push({value: Math.floor((Math.random() * 6)+ 1), isHeld: false, id: nanoid()})
    }
    
    return numArray
  }

  const diceNumbersMapped = diceNumbers.map(num => {
    return (
      <Die value={num.value} key={num.id} isHeld={num.isHeld} id={num.id} hold={hold}/>
    )
  })

  function reRoll(){
    setDiceNumbers(prev => prev.map(num => {
      return num.isHeld ? num : {value: Math.floor((Math.random() * 6)+ 1), isHeld: false, id: nanoid()}
    }))
  }

  function hold(id) {
    setDiceNumbers(prev => prev.map(num => {
      return num.id === id ? {...num, isHeld:!num.isHeld} : num
    }))
  }

  function newGame(){
    setDiceNumbers(generateAllNewDice())
  }


  return (
    <main>
      {gameWon && <Confetti/>}
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
      <div className='dice-container'>
        {diceNumbersMapped}
      </div>
      <button className="roll-dice" onClick={gameWon ? newGame : reRoll}>{gameWon ? "New Game" : "Roll Dice"}</button>
    </main>
  )
}

export default App
