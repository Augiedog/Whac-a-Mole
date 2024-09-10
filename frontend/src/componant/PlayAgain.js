// import { useState, useEffect } from 'react'

function PlayAgain(props) {
  const play = () => {
    props.setTimer(30)
    props.setTimeUp(false)
    props.setScore(0)
    props.setStreak(0)
    props.setMoles(0)
    props.setMulti(1)
    props.setCount(props.gameCount +1)
  }
  const playAgain = () => {
    props.setTimer(30)
    props.setTimeUp(false)
    props.setCount(props.gameCount + 1)
  }
  const displayAgainBTN = () => {
    if (props.gameCount > 1) {
      return (<button id='playAgainBTN' onClick={(e) => playAgain()} >Play Again?</button>)
    }
  }
    
  

  // const points = () => {
  //   playAgain()
  //   props.setScore(0)
  //   props.setMulti(props.multi + 1)
  // }
  // const moles = () => {
  //   playAgain()
  //   props.setScore(0)
  //   props.setLevel(props.level + 3)
  // }
  // const cheater = () => {
  //   props.setTimer(50)
  //   props.setTimeUp(false)
  //   props.setScore(369)
  //   props.setMulti(156)
  //   props.setLevel(8)
  // }
console.log(props, "props")
  return (
    <>
      {/* <button id='playAgainBTN' onClick={(e) => points()} >Extra Points?</button> */}
      <button id='playAgainBTN' onClick={(e) => play()} >New Game</button>
      {displayAgainBTN()}
      {/* <button id='playAgainBTN' onClick={(e) => moles()} > Extra Moles?</button> */}
      {/* <button id='playAgainBTN' onClick={(e) => cheater()} > Cheats</button> */}
    </>
  )
}
export default PlayAgain