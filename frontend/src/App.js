import { useCallback, useEffect, useState } from 'react'
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
  let [error, setError] = useState("")
  let hsAPI = "/.netlify/functions/example"
  let [topScore, setTopScore] = useState()

  const fetchData = useCallback(() => {
    fetch(hsAPI).then(async res => {
      try {
        let results = await axios.get(hsAPI)
        // const results = await res.json()
        console.log(res.json(results.data), 'this is what I want in topScore')
        setTopScore(res.jason(results.data))
      } catch (error) {
        setError(error)
      }
    })
    console.log(topScore, 'from api!!')
    return (
      { topScore }
    )
  })



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
          <HighScore score={score} topScore={topScore} error={error} />
          <Button variant="success" size="lg" onClick={(e) => window.location.reload()} >Play Again??</Button>
        </>
      )
    }
  }

  useEffect(() => {
    fetchData()
  }, [fetchData])

  useEffect(() => {
  }, [score, timer, timeUp])

  if (error) {
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
