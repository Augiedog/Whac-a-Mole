// import { useState, useEffect } from 'react'

function PlayAgain(props) {
  console.log(props, 'playagain inputs')
  const play = () => {
    props.setTimer(30)
    props.setTimeUp(false)
    props.setScore(0)
    props.setLevel(1)
    props.setMulti(1)
  }
  const playAgain = () => {
    props.setTimer(30)
    props.setTimeUp(false)
    // props.setScore(0)
    // props.setLevel(1)
    // props.setMulti(1)
  }
  const points = () => {
    props.setTimer(30)
    props.setTimeUp(false)
    props.setScore(0)
    props.setMulti(props.multi + 1)
  }
  const moles = () => {
    props.setTimer(30)
    props.setTimeUp(false)
    props.setScore(0)
    props.setLevel(props.level + 3)
  }
  const cheater = () => {
    props.setTimer(40)
    props.setTimeUp(false)
    props.setScore(369)
    props.setMulti(156)
    props.setLevel(7)
  }
  return (
    <>
      <button id='playAgainBTN' onClick={(e) => points()} >Extra Points?</button>
      <button id='playAgainBTN' onClick={(e) => play()} >Play?</button>
      <button id='playAgainBTN' onClick={(e) => playAgain()} >Play Again?</button>
      <button id='playAgainBTN' onClick={(e) => moles()} > Extra Moles?</button>
      <button id='playAgainBTN' onClick={(e) => cheater()} > Cheats</button>
    </>
  )
}
export default PlayAgain