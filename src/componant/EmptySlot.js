import { useEffect } from 'react'
import noMoleImg from '../img/molehill.png'

function NoMole(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '10vw'}}
            src={noMoleImg}
            onClick={props.handleClick} />
        </div>
    )
}

export default NoMole