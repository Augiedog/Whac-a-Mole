import { useState, useEffect } from 'react'

function Timer(props) {
  let [display, setDisplay] = useState(props.timer);
  
  useEffect(() => {
    if (display > 0) {
      setTimeout(() => [setDisplay(display - 1)], 1000);
    } else {
      setDisplay('Time\'s up!!');
      props.setTimeUp(true)
    }
  }, [display, props])

  return (
    <div className='timer'>
      {display}
    </div>
  )
}

export default Timer
