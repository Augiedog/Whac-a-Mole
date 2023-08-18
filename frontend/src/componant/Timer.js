import { useState, useEffect } from 'react'

function Timer(props) {
  let [display, setDisplay] = useState(props.timer);
  
  useEffect(() => {
    if (display > 0) {
      setTimeout(() => setDisplay(display - 1), 1000);
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

// const TimeStamp = () => {
//   let newDate = new Date()
//   let date = newDate.getDate()
//   let month = newDate.getMonth() + 1
//   let year = newDate.getFullYear()
//   return `${month < 10 ? `0${month}` : `${month}`}${'/'}${date}${'/'}${year}`
// }

export default Timer
