import { useState } from 'react'
import Die from './Die'
import { nanoid } from 'nanoid'

function App() {
  
  const [diceNumbers, setDiceNumbers] = useState(generateAllNewDice)
  
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
