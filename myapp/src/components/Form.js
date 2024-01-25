import React, { useState } from "react";

export default function Form() {
  const [text, setText] = useState("");
  const Upper=() => {
    setText(text.toUpperCase());
  // alert("my nasmdf")
  }
  const Lower=() => {
    setText(text.toLowerCase());
  // alert("my nasmdf")
  }
  const countLines = () => {
    // Split the text into an array of lines
    const lines = text.split('\n');
    // Count the number of lines
    return lines.length;
  };
  return (
    <>
      <h2 className="my-3">Enter Text to Change Type of Text</h2>
      <textarea
        className="form-control my-3 "
        id="exampleFormControlTextarea1"
        rows="6" value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      >
        
      </textarea>
      <button
        type="button"
        onClick={Upper}
        className="btn btn-primary mx-2"
      >
        Text to Upper
      </button>
      <button type="button" onClick={Lower} className="btn btn-success mx-2">
        Text to Lower
      </button>

      <h4 className="my-3">Number of characters are {text.length}</h4>
      <h4 className="my-3">Number of Words are {text.split(" ").length - 1}</h4>
      <h4 className="my-3">Number of lines are {countLines()-1}</h4>

      <p><b>Time to count Text is : </b>{text.length*0.008} ms</p>
      <p><b>Preview : </b>{text}</p>
    </>
  );
}
