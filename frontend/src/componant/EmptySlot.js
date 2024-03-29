import { useEffect } from 'react'
import noMoleImg from '../img/molehill.png'

function NoMole(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <img
            src={noMoleImg}
            onClick={props.handleClick}
            alt={'buried'} />
    )
}

export default NoMole