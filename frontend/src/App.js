import { useEffect, useState } from 'react'
import MoleContainer from './componant/MoleContainer'
import Timer from './componant/Timer'
import HighScore from './componant/HighScore'
import PlayAgain from './componant/PlayAgain'
import './App.css'

function App() {
  let [score, setScore] = useState(0)
  let [timer, setTimer] = useState(30)
  let [timeUp, setTimeUp] = useState(true)
  let [level, setLevel] = useState(1)
  let [streak, setStreak] = useState(0)
  let [multi, setMulti] = useState(1)
  let [gameCount, setCount] = useState(0)

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
          <MoleContainer key={i} setScore={setScore} score={score} streak={streak} setStreak={setStreak} multi={multi} />
        )
      }
      return (
        <div className='hills'>{hills}</div>
      )
    }
  }

  const newGame = () => {
    if (timeUp) {
      return (
        <>
          <HighScore score={score} />
          <PlayAgain
            setLevel={setLevel}
            level={level}
            score={score}
            setScore={setScore}
            setMulti={setMulti}
            multi={multi}
            setTimer={setTimer}
            setTimeUp={setTimeUp}
            gameCount={gameCount}
            setCount={setCount}
          />
        </>
      )
    }
    return (
      <>
        {scoreBoard()}
        {createMoleHill()}
      </>
    )
  }

  console.log(level, multi, timeUp, timer, streak, 'Here you go')
  useEffect(() => {
  }, [score, timer, timeUp])

  return (
    <div className="App">
      <h1 id='title'>Whac-a-Mole!</h1>
      {newGame()}
    </div>
  )
}

export default App;
