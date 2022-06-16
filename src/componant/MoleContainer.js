import { useState, useEffect } from 'react'
import Mole from './Mole'
import NoMole from './EmptySlot'


function MoleContainer(props) {
    let [daMole, setdaMole] = useState(false)

    // A handleClick function that will increment the score by 1 and immediately set the clicked-on mole to no longer display (we will pass this down only to Mole components)
    const handleClick = (e) => {
        props.setScore(props.score ++)
        setdaMole(false)
    }

    // A ternary that will determine which child to render
    const display = daMole ? <Mole setScore={props.setScore} toggle={setdaMole} handleClick={handleClick} /> : <NoMole toggle={setdaMole} />
    
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
