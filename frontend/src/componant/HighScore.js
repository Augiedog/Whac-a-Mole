
function HighScore(props) {
    return (
        <div className="highScore">
         <h3>Game Over</h3>
        <p>Your Score: {props.score}</p>
        {/* <p>{props.topScore.score}</p> */}
        </div>
    )
}

export default HighScore
