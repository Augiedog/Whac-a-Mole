import { useEffect, useState } from 'react'
import MoleContainer from './componant/MoleContainer'
import Timer from './componant/Timer'
import HighScore from './componant/HighScore'
import './App.css'

function App() {
  let [score, setScore] = useState(0)
  let [timer, setTimer] = useState(0)
  let [timeUp, setTimeUp] = useState(true)

  const scoreBoard = () => {
setTimer(30)
setTimeUp(false)
    let timeKeep = []
    timeKeep.push(
      <Timer timer={timer} setTimeUp={setTimeUp} />
    )
    return (
      <div className='scoreBoard'>
        <h3>Score: {score}</h3>
        <h3>Time: {timeKeep}</h3>
      </div>
    )
  }

  const createMoleHill = () => {
    if (!timeUp) {
      let hills = []
      for (let i = 0; i < 9; i++) {
        hills.push(
          <MoleContainer key={i} setScore={setScore} score={score} />
        )
      }
      return (<>
        {scoreBoard()}
        <div className='hills'>{hills}</div></>
      )
    } else {
      return (
        <>
          <HighScore score={score} />
          <button className='playAgainBTN' onClick={(e) => scoreBoard() }>Play Again??</button>
        </>
      )
    }
  }

  useEffect(() => {
   if (timer) {
    setTimeUp(false)
   }
  }, [score, timer, timeUp])

  console.log('timer', timer)
  return (
    <div className="App">
      <h1 id='title'>Whac-a-Mole!</h1>
      {createMoleHill()}
    </div>
  )
}

export default App;
