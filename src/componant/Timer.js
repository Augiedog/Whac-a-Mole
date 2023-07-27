import { useState, useEffect } from 'react'

function Timer(props) {
  let [display, displayProps] = useState(props.timer);
  
  useEffect(() => {
    if (display > 0) {
      setTimeout(() => displayProps(display - 1), 1000);
    } else {
      displayProps('Time\'s up!!');
      props.setTimeUp(true)
    }
  })

  return (
    <div className='timer'>
      {display}
    </div>
  )
}

export default Timer
