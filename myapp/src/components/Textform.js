import React, { useState } from 'react'

export default function Textform(props) {

    // let reset;   //Part of reset (not a part of video)

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }
    // const handleResetClick = () => {
    //     let newText= reset;
    //     setText(newText);
    // }

    const handleChange = (event) => {   //bydefault we get an event with onchange
        setText(event.target.value);    //setting text with the new value that is typed in the text area 
        //WITHOUT onChange we can't change the value in the text area, it will be read only. 

        //For reseting the text I am storing it before hand (not a part of video)     
        //  reset = event.target.value;                            
    }

    const [text, setText] = useState("Enter your text here")
    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>

                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
                {/* <button className="btn btn-primary mx-2" onClick={handleResetClick}>Reset Text</button> */}
            </div>

            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </>
    )
}
