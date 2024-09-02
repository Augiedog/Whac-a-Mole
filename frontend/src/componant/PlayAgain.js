// import { useState, useEffect } from 'react'

function PlayAgain(props) {
    console.log(props, 'playagain inputs')
    const playAgain = () => {
      props.setTimeUp(false)
      props.setScore(0)
      // window.location.reload()
    }
    const points = () => {
      props.setTimer(30); props.setTimeUp(false); props.setMulti(props.multi + 1);
    }
    const moles = () => {
      props.setTimer(30); props.setTimeUp(false); props.setLevel(props.level + 3);
    }
    return (
      <>
        <button id='playAgainBTN' onClick={(e) => points()} >Extra Points?</button>
        <button id='playAgainBTN' onClick={(e) => playAgain()} >Play Again??</button>
        <button id='playAgainBTN' onClick={(e) => moles()} > Extra Moles?</button>
      </>
    )
  }
  export default PlayAgain