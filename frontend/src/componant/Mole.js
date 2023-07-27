import { useEffect } from "react"
import moleImg from '../img/mole.png'

function Mole(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <img
            src={moleImg}
            onClick={props.handleClick}
            alt={'Whack-Me'} />

    )
}

export default Mole