import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState(" ");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Uppercase mode has Been enabled","Success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("LowerCase mode has Been enabled","Success");
  };
  const handleReClick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Reverse string mode has Been enabled","Success");
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("The strings has been copied to clipboard","Success");
}  


    const handleClrClick = ()=>{ 
     let newText = '';
     setText(newText)
     props.showAlert("The strings has been cleared from textarea","Success");
        }
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='dark'?' #4d0000':'white',color:props.mode==='dark'?'white':'#042743'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleReClick}>
          Reverse the string
        </button>
        <button id =""className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>
          Copy  to Clipboard
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClrClick}>
          Clear the String
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary here</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and {text.length} characters
        </p>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length * 0.008} Minutes took to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something to Preview it here"}</p>
      </div>
    </>
  );
}
