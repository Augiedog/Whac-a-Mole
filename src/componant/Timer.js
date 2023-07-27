import { useState, useEffect } from 'react'

function Timer(props) {
  let [dispaly, setDisplay] = useState(props.timer);
  console.log(props, 'here')

  useEffect(() => {
    if (display > 0) {
      setTimeout(() => setDisplay(display - 1), 1000);
    } else {
      setDisplay('Time\'s up!!');
      props.setTimeUp(true)
    }
  })

  return (
    <>
      {display}
    </>
  )
}

export default Timer
