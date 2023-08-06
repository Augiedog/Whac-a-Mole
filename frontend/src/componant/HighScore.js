import { useState, useEffect, useCallback } from "react"
import axios from 'axios'

function HighScore(props) {
    let hsAPI = "/.netlify/functions/example"
    let [topScore, setTopScore] = useState()
    let [error, setError] = useState("")

    const fetchData = useCallback(() => {
        fetch(hsAPI).then(async res => {
            try {
                let results = await axios.get(hsAPI)
                setTopScore(results.data)
            } catch (error) {
                setError(error)
                
            }
        }) 
        console.log(topScore, 'from api!! var=topScore')   
        return (
            {topScore}
        )  
    })

    // const TableFromObject = ({ topScore }) => {
    //     const tableRows = Object.entries(topScore).map(([key, name, score, date]) => (
    //         <tr key={key}>
    //             <td>{name}</td>
    //             <td>{score}</td>
    //         </tr>
    //     ));

    //     return (
    //         <div className="highScore">
    //             <h3>Game Over</h3>
    //             <p>Your Score: {props.score}</p>
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

    return (
        <div className="highScore">
            <h3>Game Over</h3>
            <p>Your Score: {props.score}</p>
        </div>
    )
}

export default HighScore
