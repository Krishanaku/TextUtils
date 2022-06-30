import React,{useState} from "react";


export default function TextForm(props) {
    const handleUpclick=()=>{
        // console.log("UpperCase was clicked:" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to UpperCase!!!","success")
    }
    //text change to lower
    const handlelowclick=()=>{
        console.log("LowerCase was clicked:" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to LowerCase!!!","success")
    }
    // empty clear all text
    const handleclearclick=()=>{
        let newText = "";
        setText(newText);
        props.showAlert(" Text Clear!!!","success")
    }
    //copy all text
    const handleCopy = () => {
        // var text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();//this help to not select 
        props.showAlert(" Copied to Clipboard!!!","success")
    }
    
    //Remove Extra space
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!!!","success")
    }
    const handleOnChange=(event)=>{
        // console.log("on chnage");
        setText(event.target.value);
    }
    // const handleOnChange=()=>{    when using this we cannot add any text we can to add
    //     console.log("on chnage");
        
    // }
     const [text, setText] = useState('');
    // text("new text");//wrong way to use 
    //settext("Enter text here")//right way to use
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
            {/* value and onChange is used necessary actually this help to add and chnage text */}
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'#042743'}}  id="myBox"rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert to UpperCase</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handlelowclick}>Convert to LowerCase</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleclearclick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        {/* this help to word count  */}
        <p>{text.split(/\s+/).filter(element=>{return element.length!==0}).length} words and {text.length}characters</p>
        {/* this one help to counts minutes */}
        <p>Approx {0.008 * text.split(" ").filter(element=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </>
  );
}
