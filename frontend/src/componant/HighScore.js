import { useState, useEffect, useCallback } from "react"
import axios from 'axios'

function HighScore(props) {
    let hsAPI = "/.netlify/functions/example"
    let [topScore, setTopScore] = useState([{ "_id": "64c9df6976e1feb46b8c6f0a", "name": "ACB", "score": "37" }, { "_id": "64c9e0d376e1feb46b8c6f0c", "name": "ERA", "score": "49" }, { "_id": "64c9e0eb76e1feb46b8c6f0d", "name": "ACB", "score": "14" }, { "_id": "64c9e0fd76e1feb46b8c6f0e", "name": "REB", "score": "12" }, { "_id": "64c9e10b76e1feb46b8c6f0f", "name": "KAT", "score": "56" }, { "_id": "64c9e11576e1feb46b8c6f10", "name": "OLI", "score": "32" }, { "_id": "64d28655c33cdfbd6ce35e12", "name": "REB", "score": "500" }])
    let [error, setError] = useState(null)
    console.log(topScore)

    const HighScoreTable = () => {
        const tableRows = Object.entries(topScore).map(([id, name, score]) => (
            <tr key={id}>
                <td>{name}</td>
                <td>{score}</td>
            </tr>
        ))

        return (
            <div className="highScoreTable">
                <table>
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
            </div>
        )
    }

    // const fetchData = async () => {
    //     const results = await axios.get("/.netlify/functions/example")
    //     setTopScore(results.data)  
    //     console.log(topScore)
    // }

    // useEffect(() => {
    //     fetchData()
    // })

    console.log(error, props, 'here is the error')
    return (
        <div className="highScore">
            <h3>Game Over</h3>
            <p>Your Score: {props.score}</p>
            {HighScoreTable()}

        </div>
    )
}

// db connection
// const mongoose = require('mongoose')
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('DB connected'))
//     .catch(err => console.error(err));


export default HighScore;
