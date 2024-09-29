import { useState, useEffect } from "react"
import axios from 'axios'
import NewHigh from "./NewHigh"
import './HighScore.css'

function HighScore(props) {
    let [topScore, setTopScore] = useState([])
    let high = (props.score > 45) ? true : false
    let [modalOpen, setModalOpen] = useState(high)
    
    const fetchData = async () => {
        const results = await axios.get("/.netlify/functions/highScore")
        setTopScore(results.data.sort((a, b) => b.score - a.score))
    }
    useEffect(() => {
        fetchData()
    }, [])

    const HighScoreTable = () => {
        const tableRows = topScore
        .slice(0, 50)
        .map((item, i) => (
            <tr key={item._id}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.score}</td>
            </tr>
        ))
        return (
                <div className="highScoreTableDiv">
                    <table className="highScoreTable">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
                </div>
                
        )
    } 
// would like to add tereny to display welcome : game over 
console.log(props, "props at high score")
    return (
        <div className="highScore">
            {modalOpen && <NewHigh setOpenModal={setModalOpen} score={props.score} gameCount={props.gameCount} />}
            <h3>Game Over</h3>
            <p>Your Score: {props.score}</p>
            {HighScoreTable(topScore)}
        </div>
    )
}

export default HighScore;
