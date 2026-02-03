import React, { useState } from 'react';

export default function TextForm(props) {

  const [text, setText] = useState("");

  const handleUpper = () => {
    setText(text.toUpperCase());
    props.showalert("converted to upper case","success");
  };

  const handleLower = () => {
    setText(text.toLowerCase());
    props.showalert("converted to lower case","success");
  };

  const handleClear = () => {
    setText("");
    props.showalert("data cleared sucessfully","success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
   
    props.showalert("data copied sucessfully","success");
  };

  const handleRemoveSpaces = () => {
    let newText = text.split(/\s+/).join(" ");
    setText(newText);
  };

  const onChangeText = (event) => {
    setText(event.target.value);
  };

  // accurate word count
 // let words = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 className= "mb-4">{props.hea}</h1>

        <div className="my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={onChangeText}
            style={{
              backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black'
            }}
            id="mybox"
            rows="8">
          </textarea>
        </div>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpper}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLower}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>

      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Text Summary</h1>
        <p>
                    {text.split(/\s+/).length-1} words and {text.length} characters.<br />
                    {0.008 * text.split(" ").length} the above text can be read in that much time by an average user.
                </p>
        <h2>Preview:</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
