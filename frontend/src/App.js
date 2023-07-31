import { useEffect, useState } from 'react'
import MoleContainer from './componant/MoleContainer'
import Timer from './componant/Timer'
import HighScore from './componant/HighScore'
import './App.css'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

function App() {
  let [score, setScore] = useState(0)
  let [timer] = useState('30')
  let [timeUp, setTimeUp] = useState(false)
  let [error, setError] = useState(null)
  let hsAPI = ".netlify/functions/highScore"
  let [topScore, setTopScore] = useState()

  useEffect(() => {
    fetch(hsAPI).then(async res => {
      try {
        let results = await axios.get(hsAPI)
        console.log(results.data, 'this is what I want in topScore')
        console.log(results)
        setTopScore(results.data)
        console.log(topScore)
      } catch (error) {
        setError(error)
      }
    })

  }, [])

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
          <HighScore score={score} topScore={topScore} />
          <Button variant="success" size="lg" onClick={(e) => window.location.reload()} >Play Again??</Button>
        </>
      )
    }
  }

  useEffect(() => {
  }, [score, timer, timeUp])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div className="App">
        <h1>Whac-a-Mole!</h1>
        {scoreBoard()}
        {createMoleHill()}
      </div>
    )
  }
}

export default App;
