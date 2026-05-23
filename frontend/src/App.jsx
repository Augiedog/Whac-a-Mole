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
      if (multi > 1) { return (<>x{multi}</>) }
    }
    let showMoles = () => {
      if (moles > 0) { return (<>+{moles} Moles</>) }
    }
    let showStreak = () => {
      if (streak > 9) { return (<>Streak:{streak}</>) }
    }
    return (
      <div className='scoreBoard'>
        <h3>Score: {score}</h3>
        <p>{showMulti()}</p>
        <p>{showMoles()}</p>
        <p>{showStreak()}</p>
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
            streak={streak}
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

  useEffect(() => {
  }, [score, timer, timeUp])

  return (
    <div className="App">
      <h1 id='title'>Whac-A-Mole!</h1>
      {newGame()}
    </div>
  )
}

export default App;
