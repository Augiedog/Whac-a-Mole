import { useState, useEffect } from 'react'

function PlayAgain(props) {
    console.log(props, 'playagain inputs')
    // let points = [(props.setTimer + 30)(props.setTimeUp = false)(props.setMulti = props.multi + 1)]
    // let moles = [(props.setTimer + 30)(props.setTimeUp = false)(props.setLevel= props.level + 1)]
    return (
      <>
        <button id='playAgainBTN' onClick={(e) => window.location.reload()} >Play Again??</button>
        {/* <button id='playAgainBTN' onClick={(e) => points} >Extra Points?</button> */}
        {/* <button id='playAgainBTN' onClick={(e) => moles} > Extra Moles?</button> */}
      </>
    )
  }
  export default PlayAgain