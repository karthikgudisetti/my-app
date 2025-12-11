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
    props.showalert("converted","success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    console.log("Text Copied!");
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
        <h1>{props.hea}</h1>

        <div className="my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={onChangeText}
            style={{
              backgroundColor: props.mode === 'dark' ? '#6c757d' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black'
            }}
            id="mybox"
            rows="8">
          </textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpper}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLower}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>

      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Text Summary</h1>
        <p>
                    {text.split(" ").length-1} words and {text.length} characters.<br />
                    {0.008 * text.split(" ").length} the above text can be read in that much time by an average user.
                </p>
        <h2>Preview:</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
