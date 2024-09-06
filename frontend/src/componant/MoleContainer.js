import { useState, useEffect } from 'react'
import Mole from './Mole'
import NoMole from './EmptySlot'


function MoleContainer(props) {
    let locStreak = props.streak

    let [daMole, setdaMole] = useState(false)
    // A handleClick function that will increment the score by 1 and immediately set the clicked-on mole to no longer display (we will pass this down only to Mole components)
    const handleClick = (e) => {
        props.setScore(prevScore => prevScore + 1 * props.multi)
        props.setStreak(prevStreak => prevStreak + 1)
        setdaMole(false)
    }
    // A function the will decrement the score by 1 and keep the empty hill displayed
    const handleBadClick = (e) => {
        props.setScore(props.score -1)
        props.setStreak(0)
        setdaMole(false)
    }
    // A ternary that will determine which child to render
    const display = daMole ? <Mole toggle={setdaMole} handleClick={handleClick} /> : <NoMole toggle={setdaMole} handleClick={handleBadClick} />
    console.log(props, 'at Mole container')
    
    useEffect(() => {
        if (locStreak > 4 && locStreak < 15) {
            props.setMulti(5)
        } else {
            props.setMulti(1)
        }
    }, [daMole, locStreak])

    return (
        <div className='mole-container'>
            {display}
        </div>
    )
}

export default MoleContainer
