import { useState } from 'react'
import Die from './Die'


function App() {
  
  const [diceNumbers, setDiceNumbers] = useState(generateAllNewDice)
  
  function generateAllNewDice() {
    const numArray = []
    for(let i=0;i<10;i++){
      numArray.push(Math.floor((Math.random() * 6)+ 1))
    }
    
    return numArray
  }

  const diceNumbersMapped = diceNumbers.map(num => {
    return (
      <Die value={num}/>
    )
  })

  function reRoll(){
    setDiceNumbers(generateAllNewDice)
  }

  return (
    <main>
      <div className='dice-container'>
        {diceNumbersMapped}
      </div>
      <button className="roll-dice" onClick={reRoll}>Roll Dice</button>
    </main>
  )
}

export default App
