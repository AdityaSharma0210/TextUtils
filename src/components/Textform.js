import React, { useState } from 'react';

export default function Textform(props) {

    const [text, setText] = useState('');

    const handeOnChange=(event)=>{
        setText(event.target.value);
    }

    const handleUpperCase=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!");
    }

    const handleLowerCase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!");
    }

    const handleClearText=()=>{
        let newText="";
        setText(newText);
        props.showAlert("Text Cleared!");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard");
    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed");
    }

  return (
    <>
        <div className="container my-3">
            <h1>{props.heading}</h1>
            <div className="form-floating">
                <div class="mb-3">
                    <textarea className="form-control" value={text} onChange={handeOnChange}  id="myBox" rows="8" style={{backgroundColor: props.mode ==='light'?'white':'#4879a9',color:props.mode ==='light'?'black':'white',border:props.mode ==='light'?'2px solid black':'2px solid white'}}></textarea>
                </div>
                <button className='btn btn-primary my-3 mx-2' onClick={handleUpperCase}>
                    Convert to UpperCase
                </button>
                <button className='btn btn-primary my-3 mx-2' onClick={handleLowerCase}>
                    Convert to LowerCase
                </button>
                <button className='btn btn-primary my-3 mx-2' onClick={handleClearText}>
                    Clear Text
                </button>
                <button className='btn btn-primary my-3 mx-2' onClick={handleCopy}>
                    Copy Text
                </button>
                <button className='btn btn-primary my-3 mx-2' onClick={handleExtraSpaces}>
                    Remove Extra Spaces
                </button>
            </div>
            <div className='row '>
                <div className="col-md-3 col-sm-3" style={{border:props.mode ==='light'?'2px solid black':'2px solid white',borderRadius:'15px',height:'200px'}}>
                <center>
                <h2 className='my-2'>Your Text Summary</h2>
                <br/>
                <p >{text.split(" ").length-1} words</p>
                <p>{0.008*(text.split(" ").length-1)} minutes read</p>
                </center>
                </div>
                <div className="col-md-9 col-sm-9"> 
                <h2 className='my-2'>Preview</h2>
                <br/>
                <p>{text}</p>
                </div>   
            </div>
        </div>
    </>
  )
}
