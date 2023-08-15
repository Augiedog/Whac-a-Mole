import { useEffect, useState } from 'react'
import MoleContainer from './componant/MoleContainer'
import Timer from './componant/Timer'
import HighScore from './componant/HighScore'
import './App.css'
// import Button from 'react-bootstrap/Button'

function App() {
  let [score, setScore] = useState(0)
  let [timer] = useState('5')
  let [timeUp, setTimeUp] = useState(false)

  const scoreBoard = () => {
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
      return (
        <div className='hills'>{hills}</div>
      )
    } else {
      return (
        <>
          <HighScore score={score} />
          <button className='playAgainBTN' onClick={(e) => window.location.reload()} >Play Again??</button>
        </>
      )
    }
  }

  useEffect(() => {
  }, [score, timer, timeUp])

    return (
      <div className="App">
        <h1 id='title'>Whac-a-Mole!</h1>
        {scoreBoard()}
        {createMoleHill()}
      </div>
    )
}

export default App;
