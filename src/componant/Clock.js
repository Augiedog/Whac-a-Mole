import { useState } from "react"

function Clock(props) {
    console.log(props, 'I made this')
    // setTimeout(() => {
    //     setInterval(() => {
    //         props.setTime(new Date().toLocaleDateString())
    //     }, 1000)
    // })

    // return (
    //     <>
    //         timmer {new Date().toLocaleTimeString()}
    //     </>
    // )
}

export default Clock