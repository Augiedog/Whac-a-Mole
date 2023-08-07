import { useState, useEffect, useCallback } from "react"
import axios from 'axios'

function HighScore(props) {
    let hsAPI = "/.netlify/functions/example"
    let [topScore, setTopScore] = useState()
    let [error, setError] = useState(null)

    const HighScoreTable = ( topScore ) => {
        const tableRows = Object.entries(topScore).map(([key, name, score]) => (
            <tr key={key}>
                <td>{name}</td>
                <td>{score}</td>
            </tr>
        ));

        return (
            <div className="highScoreTable">
                <table>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>
        )
    }

    const fetchData = useCallback(() => {
        fetch(hsAPI).then(async res => {
            try {
                let results = await axios.get(hsAPI)
                setTopScore(results.data)
            } catch (error) {
                setError(error)
            }
        }) 
        console.log(topScore, 'var=topScore')   
        return (
            HighScoreTable()
        )  
    })

    useEffect(() => (
        fetchData()
    ), [HighScoreTable] )

    console.log(error, 'here is the error')
    return (
        <div className="highScore">
            <h3>Game Over</h3>
            <p>Your Score: {props.score}</p>
        </div>
    )
}

// db connection
// const mongoose = require('mongoose')
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('DB connected'))
//     .catch(err => console.error(err));


export default HighScore
