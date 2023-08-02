
function HighScore(props) {
    console.log(props, 'are we here')
    return (
        <div className="highScore">
         <h3>Game Over</h3>
        <p>Your Score: {props.score}</p>
        {/* <p>{props.topScore.name}</p>
        <p>{props.topScore.score}</p> */}
        <h4>Error: {props.error.message}</h4>
        </div>
    )
}

export default HighScore
