import { useEffect, useState } from 'react'
import MoleContainer from './componant/MoleContainer'
import './App.css'


function App() {
  let [score, setScore] = useState(0)

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
  },[score])

  return (
    <div className="App">
      <h1>Whac-a-Mole!</h1>
      <h3>{score}</h3>
      {createMoleHill()}
    </div>
  );
}

export default App;
