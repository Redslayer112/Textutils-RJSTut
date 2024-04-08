import React, { useState, useEffect } from 'react';

export default function TrafficSig() {
    const [color, setColor] = useState("white")

    const redClicked = () => {
        // console.log("red button was clicked")
        setColor("#FF204E")
    }
    const yellowClicked = () => {
        // console.log("yellow button was clicked")
        setColor("#FFC700")
    }
    const greenClicked = () => {
        // console.log("green button was clicked")
        setColor("#2ecc71")
    }
    const whiteClicked = () => {
        // console.log("green button was clicked")
        setColor("white")
    }

    useEffect(() => {
        document.body.style.backgroundColor = color
    }, [color])

    return (
        <div className="container-fluid position-absolute top-50 start-50 translate-middle">
            <div className="d-flex my-3 py-3 flex-column">
                <button type="button" className="btn btn-lg btn-danger my-5 border border-4 border-black rounded" onClick={redClicked}>Red</button>
                <button type="button" className="btn btn-lg btn-warning my-5 border border-4 border-black rounded" onClick={yellowClicked}>Yellow</button>
                <button type="button" className="btn btn-lg btn-success my-5 border border-4 border-black rounded" onClick={greenClicked}>Green</button>
                <button type="button" className="btn btn-lg btn-primary my-5 border border-4 border-black rounded" onClick={whiteClicked}>Reset</button>
            </div>
        </div>
    )
}
