import React, { useState } from 'react';

export default function TextContent(props) {
    const [text, setText] = useState("")

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleloClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleToCapitalized = () => {
        let textSplit = text.split(" ")
        for (let i = 0; i < textSplit.length; i++) {
            textSplit[i] = textSplit[i][0].toUpperCase() + textSplit[i].slice(1);
        }
        setText(textSplit.join(" "))
    }

    const handleToAlternating = () => {
        let newText = ""
        for (let i = 0; i < text.length; i++) {
            if (text[i] === text[i].toUpperCase()) {
                newText += text[i].toLowerCase()
            } else {
                newText += text[i].toUpperCase()
            }
        }
        setText(newText)
    }

    const handleToCopy = () => {
        let SelectText = document.getElementById("myForm")
        SelectText.select();
        navigator.clipboard.writeText(SelectText.value)
    }

    const handleToClear = () => {
        setText("")
    }

    return (
        <div>
            <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <div className="my-3">
                    <h2> {props.text} </h2>
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'gray', color: props.mode === 'light' ? 'black' : 'white' }} value={text} onChange={handleOnChange} placeholder='Enter Text Here' id="myForm" rows="5"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Conver To Uppercase</button>
                <button className="btn btn-primary" onClick={handleloClick}>Conver To lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleToCapitalized}>Conver To Capitalize</button>
                <button className="btn btn-primary" onClick={handleToAlternating}>Conver To Alternating</button>
                <button className="btn btn-primary mx-2" onClick={handleToCopy}>Copy To Clipboard</button>
                <button className="btn btn-primary" onClick={handleToClear}>Clear Text</button>
            </div>

            <div className='my-3' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your Text Summary</h2>
                <p> {text.split(" ").length} words and {text.length} characters.</p>
                <p>{text.split(" ").length * 0.008} minutes Read.</p>
                <h2>priview</h2>
                <p> {text.length > 0 ? text : 'Enter Something in the Txetboxabove to preview it here'} </p>
            </div>
        </div>

    )
}
