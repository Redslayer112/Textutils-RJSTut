import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUPClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case", "success")
    }
    const handleLOClick = () => {
        // console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case", "success")
    }
    const handleCRClick = () => {
        // console.log("Crazycase was clicked");
        let newText = text.split('').map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join('');
        setText(newText);
        props.showAlert("Converted to Crazy case", "success")
    }
    const handleTIClick = () => {
        // console.log("Titlecase was clicked");
        let newText = text => text.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());;
        setText(newText);
        props.showAlert("Converted to Title case", "success")
    }
    const handleCLClick = () => {
        // console.log("Clear text was clicked");
        let newText = "";
        setText(newText);
        props.showAlert("Cleared text in textarea", "danger")
    }
    const handleCoClick = () => {
        // console.log("Copy text was clicked");
        navigator.clipboard.writeText(text);
        props.showAlert("Copied text to your clipboard", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");

    return (
        <>
            <div style={{ height: "95vh", color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'dark' ? '#222' : 'white' }}>
                <div className="container" data-bs-theme={props.mode} >
                    <h1 className='py-3'>{props.heading}</h1>
                    <div className="my-3">
                        <textarea className="form-control border border-light rounded" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    </div>
                    <div className="d-flex flex-wrap my-4 justify-content-around">
                        <button className="btn btn-primary mx-1 my-1" onClick={handleUPClick}>Convert to Uppercase</button>
                        <button className="btn btn-primary mx-1 my-1" onClick={handleLOClick}>Convert to Lowercase</button>
                        <button className="btn btn-primary mx-1 my-1" onClick={handleCRClick}>Convert to Crazycase</button>
                        <button className="btn btn-primary mx-1 my-1" onClick={handleTIClick}>Convert to Titlecase</button>
                        <button className="btn btn-success mx-1 my-1" onClick={handleCoClick}>Copy Text</button>

                        <button className="btn btn-danger mx-4 my-1" onClick={handleCLClick}>Clear text</button>
                    </div>
                </div >
                <div className='container my-4' style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'dark' ? '#222' : 'white' }}>
                    <h1>Text summary</h1>
                    <h4>{text.length === 0 ? "0" : text.trim().split(/\s+/).length}  words and {text.length} characters</h4>
                    <h2>Preview</h2>
                    <h5>{text.length > 0 ? text : "Enter text to preview text"}</h5>
                </div>
            </div>
        </>
    )
}
