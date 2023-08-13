import { useState, useEffect } from "react"
import axios from 'axios'
import NewHigh from "./NewHigh"

function HighScore(props) {
    let hsAPI = "/.netlify/functions/example"
    let [topScore, setTopScore] = useState([])
    const [modalOpen, setModalOpen] = useState(true)
    let [error, setError] = useState(null)

    const fetchData = async () => {
        const results = await axios.get("/.netlify/functions/highScore")
        setTopScore(results.data.sort((a, b) => b.score - a.score))
    }
    useEffect(() => {
        fetchData()
    },[])

    const HighScoreTable = () => {
        const tableRows = topScore.map((item, i) => (
            <tr key={item._id}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.score}</td>
            </tr>
        ))
        return (
            <table class="highScoreTable">
                <thead>
                    <tr>
                        <th>Place</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        )
    }

    console.log(error, props, topScore, 'here is the error')
    return (
        <div className="highScore">
            <h3>Game Over</h3>
            <p>Your Score: {props.score}</p>
            {HighScoreTable(topScore)}
            {modalOpen && <NewHigh setOpenModal={setModalOpen} score={props.score} />}

        </div>
    )
}

export default HighScore;
