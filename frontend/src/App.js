import { useEffect, useState } from 'react'
import MoleContainer from './componant/MoleContainer'
import Timer from './componant/Timer'
import HighScore from './componant/HighScore'
import PlayAgain from './componant/PlayAgain'
import './App.css'

function App() {
  let [score, setScore] = useState(0)
  let [timer, setTimer] = useState('30')
  let [timeUp, setTimeUp] = useState(false)
  let [level, setLevel] = useState(1)
  let [multi, setMulti] = useState(2)

  const scoreBoard = () => {
    let timeKeep = []
    timeKeep.push(
      <Timer timer={timer} setTimeUp={setTimeUp} />
    )
    return (
      <div className='scoreBoard'>
        <h3>Score: {score}</h3>
        <h3>Time: {timeKeep}</h3>
        <h3>Level: {level}</h3>
      </div>
    )
  }

  const createMoleHill = () => {
    if (!timeUp) {
      let hills = []
      for (let i = 0; i < 8 + level; i++) {
        hills.push(
          <MoleContainer key={i} setScore={setScore} score={score} multi={multi} />
        )
      }
      return (
        <div className='hills'>{hills}</div>
      )
    } else {
      return (
        <>
          <HighScore score={score} />
          <PlayAgain setLevel={setLevel} level={level} setMulti={setMulti} multi={multi} setTimer={setTimer} setTimeUp={setTimeUp} />
        </>
      )
    }
  }

  console.log(level, multi, 'Here you go')
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
