import Mole from './Mole'
import NoMole from './EmptySlot'

function MoleContainer(props) {

    // A handleClick function that will increment the score by 1 and immediately set the clicked-on mole to no longer display (we will pass this down only to Mole components)
    const handleClick = (e) => {
        display(false)
    }

    // A ternary that will determine which child to render
    const display = () => {
        return (
            <>
                <Mole /><NoMole />
                
            </>
        )
    }

    return (
        <div className='mole-container'>
            {display()}
        </div>
    )
}

export default MoleContainer