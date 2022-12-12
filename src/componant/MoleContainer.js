import { useState, useEffect } from 'react'
import Mole from './Mole'
import NoMole from './EmptySlot'


function MoleContainer(props) {
    let [daMole, setdaMole] = useState(false)

    // A handleClick function that will increment the score by 1 and immediately set the clicked-on mole to no longer display (we will pass this down only to Mole components)
    const handleClick = (e) => {
        props.setScore(props.score +1)
        setdaMole(false)
    }
    // A function the will decrement the score by 5 and
    const handleBadClick = (e) => {
        props.setScore(props.score - 5)
        setdaMole(false)
    }
    // A ternary that will determine which child to render
    const display = daMole ? <Mole toggle={setdaMole} handleClick={handleClick} /> : <NoMole toggle={setdaMole} handleClick={handleBadClick}/>
    
    useEffect(() => {
        console.log(daMole)
    }, [daMole])

    return (
        <div className='mole-container'>
            {display}
        </div>
    )
}

export default MoleContainer
