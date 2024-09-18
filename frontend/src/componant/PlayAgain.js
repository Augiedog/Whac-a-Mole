
function PlayAgain(props) {
  const play = () => {
    props.setTimer(30)
    props.setTimeUp(false)
    props.setScore(0)
    props.setStreak(0)
    props.setMoles(0)
    props.setMulti(1)
    props.setCount(props.gameCount + 1)
  }
  const playAgain = () => {
    props.setTimer(50)
    props.setTimeUp(false)
    props.setScore(76)
    props.setMulti(76)
    props.setCount(props.gameCount + 1)
  }
  const displayAgainBTN = () => {
    if (props.gameCount > 75 && props.gameCount < 77) {
      return (<button id='playAgainBTN' onClick={(e) => playAgain()} >Bonus Play</button>)
    }
  }

  return (
    <>
      <button id='playAgainBTN' onClick={(e) => play()} >New Game</button>
      {displayAgainBTN()}
    </>
  )
}
export default PlayAgain