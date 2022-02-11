import React , {useState} from "react";

export default function TextBox(props) {
  const [text , setText] = useState("")
  const onClickUpperCase = () =>{
    // console.log(text);
    setText(text.toUpperCase());
  }
  const onClickLowerCase = () =>{
    setText(text.toLowerCase())
  }
  const onChangeHandler = (event) =>{
          // console.log(event.target.value)
          setText(event.target.value);
  }
  const wordCount = () =>{
    if(text.length){
      if(text.endsWith(" ")){
        return text.split(" ").length - 1;
      }
      return text.split(" ").length;
    }
    return 0;
  }
  const onClickRemove = () =>{
    setText(text.replace(/\s+/g, ' ').trim())
  }
  return (
    <>
    <div>
      <div className="mb-3 my-3">
      <h2 style={{color:`${props.mode === 'dark' ? 'white' : 'black'}`}}>{props.heading}</h2>
        <textarea
          style={{color:`${props.mode === 'dark' ? 'white' : 'black'}`,backgroundColor:`${props.mode === 'dark' ? '#414141' : 'white'} `}}
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Enter your Text"
          value={text}
          onChange={onChangeHandler}
          rows="10"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={onClickUpperCase}>Convert Text to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={onClickLowerCase}>Convert Text to Lowercase</button>
      <button className="btn btn-primary" onClick={onClickRemove}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
      <h2  style={{color:`${props.mode === 'dark' ? 'white' : 'black'}`}}>Summary of Your Text</h2>
      <p  style={{color:`${props.mode === 'dark' ? 'white' : 'black'}`}}>Number of Words <strong> {wordCount()} </strong>and Number of Characters <strong>{text.length}</strong></p>
      <p  style={{color:`${props.mode === 'dark' ? 'white' : 'black'}`}}>Reading Time: <strong>{(wordCount()*0.008).toFixed(2)}</strong> minutes</p>
    </div>
    <div className="container">
      <h2  style={{color:`${props.mode === 'dark' ? 'white' : 'black'}`}}>Preview</h2>
      <p  style={{color:`${props.mode === 'dark' ? 'white' : 'black'}`}}>{text}</p>
    </div>
    </>
  );
}
