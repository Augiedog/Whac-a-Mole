import { useEffect, useState } from 'react'
import MoleContainer from './componant/MoleContainer'
import Timer from './componant/Timer'
import './App.css'


function App() {
  let [score, setScore] = useState(0)
  let [timer, setTime] = useState('30')
  let [timeUp, setTimeUp] = useState(false)
  console.log(timeUp, 'Time UP')

  const createTimer = () => {
    let timeKeep = []
    timeKeep.push(
      <Timer timer={timer} setTimeUp={setTimeUp} />
    )
    return (
      <div className='timer'>{timeKeep}</div>
    )
  }

  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 9; i++) {
      hills.push(
        <MoleContainer key={i} setScore={setScore} score={score} />
      )
    }
    return (
      <div className='hills'>{hills}</div>
    )
  }

  useEffect(() => {
  }, [score], [timer], [timeUp])

  return (
    <div className="App">
      <h1>Whac-a-Mole!</h1>
      {createTimer()}
      <h3>Score: {score}</h3>
      {finaleScore}
      {createMoleHill()}
    </div>
  );
}

export default App;
