import { useEffect, useState } from 'react'
import MoleContainer from './componant/MoleContainer'
import Clock from './componant/Clock'
import './App.css'


function App() {
  let [score, setScore] = useState(0)
  let [timer, setTime] = useState(30)

  const createTimer = ()  => {
    let timer = []
    timer.push(
      <Clock timer={timer} setTime={setTime} />
    )
    return (
      <div className='timer'>{timer}</div>
    )
  }

  const createMoleHill = () => {
    let  hills = []
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
  },[score],[timer])

  return (
    <div className="App">
      <h1>Whac-a-Mole!</h1>
      <h3>{score} .... {timer}</h3>
      {createTimer()}
      {createMoleHill()}
    </div>
  );
}

export default App;
