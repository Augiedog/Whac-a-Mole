import Mole from './Mole'
import NoMole from './EmptySlot'

function MoleContainer(props) {
    let [theMole, setTheMole] = useState(false)

    // A handleClick function that will increment the score by 1 and immediately set the clicked-on mole to no longer display (we will pass this down only to Mole components)
    const handleClick = (e) => {
        prop.setScore(props.score ++)
        display(false)
    }

    // A ternary that will determine which child to render
    const display = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> : <NoMole toggle={setTheMole} />
    }

    return (
        <div style={{'display': 'inline-block', 'width': '25vw'}}>
            {display()}
        </div>
    )
}

export default MoleContainer
