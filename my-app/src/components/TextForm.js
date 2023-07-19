import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Uppercase was clicked","success")
      }
      const handleLoClick = () =>{
        // console.log("Uppercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Lowercase was clicked","success")
      }
      const handleOnChange = (event) =>{
        // console.log("On changed")
        setText(event.target.value)
      }
      const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speak message was clicked","success")
    }

    const countWords = (str) => {
    let words;
    if (text === "") {

      words = 0;
    } else {
      words = str.trim().split(/\s+/).length;
    }
    return words;
  };

    const [text, setText] = useState('')
    return (
      <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
          <h3>{props.heading}</h3>
          <div className="mb-3">
            {/* <label for="myBox" className="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
          <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>Your text summary</h1>
          <p>{countWords(text)} words are {text.length} characters</p>
          {/* <p>{text.split(" ").length} words are {text.length} characters</p> */}
          <p>{0.008 * text.split(" ").length} minutes read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter some text to preview"}</p>
        </div>
      </>
  )
}
