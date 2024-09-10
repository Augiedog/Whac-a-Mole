import { useState, useEffect } from 'react'
import Mole from './Mole'
import NoMole from './EmptySlot'


function MoleContainer(props) {
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
    
    useEffect(() => {
        if (props.streak > 10 && props.streak < 21) {
            props.setMulti(5)
        } 
        if (props.streak > 13 && props.streak < 33) {
            props.setMoles(3)
        }
        if (props.streak > 15 && props.streak < 35) {
            props.setMoles(6)
        }
    }, [daMole, props])

    return (
        <div className='mole-container'>
            {display}
        </div>
    )
}

export default MoleContainer
