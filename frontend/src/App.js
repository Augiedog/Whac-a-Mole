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
  let [moles, setMoles] = useState(0)
  let [streak, setStreak] = useState(0)
  let [multi, setMulti] = useState(1)
  let [gameCount, setCount] = useState(0)

  const scoreBoard = () => {
    let timeKeep = []
    timeKeep.push(
      <Timer timer={timer} setTimeUp={setTimeUp} />
    )
    let showMulti = () => {
      if (multi > 1) {
        return (
          <p>x{multi}</p>
        )
      }
    }

    let showLevel = () => {
      if (moles > 0) {
        return (
          <p>extra moles {moles}</p>
        )
      }
    }

    return (
      <div className='scoreBoard'>
        <h3>Score: {score}</h3>{showMulti()}
        {showLevel()}
        <h3>Time: {timeKeep}</h3>
      </div>
    )
  }

  const createMoleHill = () => {
    if (!timeUp) {
      let hills = []
      for (let i = 0; i < 9 + moles; i++) {
        hills.push(
          <MoleContainer key={i}
            score={score}
            setScore={setScore}
            streak={streak}
            setMoles={setMoles}
            setStreak={setStreak}
            multi={multi}
            setMulti={setMulti}
            setTimer={setTimer}
          />
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
          <HighScore score={score} gameCount={gameCount} />
          <PlayAgain
            setMoles={setMoles}
            moles={moles}
            score={score}
            setScore={setScore}
            multi={multi}
            setMulti={setMulti}
            setStreak={setStreak}
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

  console.log( gameCount, 'gameCount')
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
