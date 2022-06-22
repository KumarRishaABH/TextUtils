
import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    const newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to upper case", "success");
    }
    const handleLowClick = ()=>{
        const newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lower case","success");
    }

    const handleOnChange = (event)=>{
   // console.log("On change");
    setText(event.target.value);
    }   

    const ClearText = () => {
      const newtext = " ";
      setText(newtext);
      props.showAlert("Cleard Text", "success");
    }
    
    const [text, setText] = useState("");
    //setText("You have clicked on handleUpclick");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#3c5074" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#3c5074",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
      </div>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-2 my -1"
        onClick={handleUpClick}
      >
        {" "}
        Convert to Upper
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-2 my -1"
        onClick={handleLowClick}
      >
        {" "}
        Convert to Lower
      </button>

      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-2 my -1"
        onClick={ClearText}
      >
        {" "}
        Clear Text
      </button>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#3c5074" }}
      >
        <h1>Your text summary</h1>
        <p>
          {" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters{" "}
        </p>
        <p>
          {text.split(/\s+/).filter((element) => {
            return element.length !== 0;
          }).length * 0.3}{" "}
          average time in minutes to read{" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
  
}
