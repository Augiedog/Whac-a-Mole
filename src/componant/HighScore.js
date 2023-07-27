import { useState, useEffect } from "react"

function HighScore(props) {
    return (
        <div className="highScore">
         <h3>Game Over</h3>
        <p>Your Score: {props.score}</p>
        </div>
    )
}

export default HighScore
