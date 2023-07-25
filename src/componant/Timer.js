import {useState} from "react"
function Clock(props) {

    setTimeout(() => {
        setInterval(() => {
            setTime(new Date().toLocaleDateString())
        }, props)
    })
}
return (
    <>
        timmer {new Date().toLocaleTimeString()}
    </>
)
export default Clock