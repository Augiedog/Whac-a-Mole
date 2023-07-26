import { useEffect, useState } from 'react'
import MoleContainer from './componant/MoleContainer'
import Timer from './componant/Timer'
// import Clock from './componant/Clock'
import './App.css'


function App() {
  let [score, setScore] = useState(0)
  let [timer, setTime] = useState('5')
  let [finaleScore, setFinaleScore] = useState(false)
  console.log(finaleScore, 'cuz')

  const createTimer = () => {
    let timeKeep = []
    timeKeep.push(
      <Timer timer={timer} setFinaleScore={setFinaleScore} />
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
  }, [score], [timer], [finaleScore])

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
