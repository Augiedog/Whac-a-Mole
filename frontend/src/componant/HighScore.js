import { useState, useEffect } from "react"
import axios from 'axios'
import NewHigh from "./NewHigh"

function HighScore(props) {
    let [topScore, setTopScore] = useState([])
    let [modalOpen, setModalOpen] = useState(true)

    const fetchData = async () => {
        const results = await axios.get("/.netlify/functions/highScore")
        setTopScore(results.data.sort((a, b) => b.score - a.score))
    }
    useEffect(() => {
        fetchData()
    }, [])

    const HighScoreTable = () => {
        const tableRows = topScore.map((item, i) => (
            <tr key={item._id}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.score}</td>
            </tr>
        ))
        return (
                <table className="highScoreTable">
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

    console.log(props, topScore, 'here is the error')
    return (
        <div className="highScore">
            {modalOpen && <NewHigh setOpenModal={setModalOpen} score={props.score} />}
            <h3>Game Over</h3>
            <p>Your Score: {props.score}</p>
            {HighScoreTable(topScore)}
            <button onClick={() => { setModalOpen(true) }}>Temp Button That Opens Modal</button>


        </div>
    )
}

export default HighScore;
