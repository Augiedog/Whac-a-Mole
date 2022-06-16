import { useEffect } from "react"
import moleImg from '../img/mole.png'

function Mole(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.daMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '10vw'}}
            src={moleImg}
            onClick={props.handleClick}
            alt={'Whack-Me'} />
        </div>
    )
}

export default Mole