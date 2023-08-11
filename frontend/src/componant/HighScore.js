import { useState, useEffect, useCallback } from "react"
import axios from 'axios'

function HighScore(props) {
    let hsAPI = "/.netlify/functions/example"
    let [topScore, setTopScore] = useState()
    let [error, setError] = useState(null)
    console.log(topScore, 'var = topScore')

    const HighScoreTable = () => {
        const tableRows = topScore.map(item => (
            <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.score}</td>
            </tr>
        ))       
        return (
                <table class="highScoreTable" striped="columns" bordered hover size="sm" >
                    <thead>
                        <tr>
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

    const fetchData = async () => {
        const results = await axios.get("/.netlify/functions/example")
        setTopScore(results.data)  
        console.log(topScore)
    }

    useEffect(() => {
        fetchData()
    })

    console.log(error, props, 'here is the error')
    return (
        <div className="highScore">
            <h3>Game Over</h3>
            <p>Your Score: {props.score}</p>
            {HighScoreTable(topScore)}

        </div>
    )
}

export default HighScore;
