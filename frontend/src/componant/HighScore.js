import { useState, useEffect, useCallback } from "react"
import axios from 'axios'

function HighScore(props) {
    let hsAPI = "/.netlify/functions/example"
    let [topScore, setTopScore] = useState()
    let [error, setError] = useState(null)

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
            {topScore}
        )  
    })

    // const HighScoreTableFromObject = ({ topScore }) => {
    //     const tableRows = Object.entries(topScore).map(([key, name, score, date]) => (
    //         <tr key={key}>
    //             <td>{name}</td>
    //             <td>{score}</td>
    //         </tr>
    //     ));

    //     return (
    //         <div className="highScoreTable">
    //             <table>
    //                 <tbody>
    //                     {tableRows}
    //                 </tbody>
    //             </table>
    //         </div>
    //     )
    // }

    useEffect(() => (
        fetchData()
    ), [fetchData])

console.log(error, 'here is the error')
    return (
        <div className="highScore">
            <h3>Game Over</h3>
            <p>Your Score: {props.score}</p>
        </div>
    )
}

export default HighScore
