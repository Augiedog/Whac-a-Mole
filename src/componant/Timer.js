import { useState, useEffect } from 'react'

function Timer(props) {
  let [seconds, setSeconds] = useState(props.timer);
  console.log(props, 'here')

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds('Time\'s up!!');
      props.setFinaleScore(true)
    }
  })

  return (
    <>
      {seconds}
    </>
  )
}

export default Timer