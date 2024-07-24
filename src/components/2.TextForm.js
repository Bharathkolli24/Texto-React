import React, { useState } from 'react'; //{useState} is known as Hook -Hook is nothing but acquiring the properties of classes without creating classes 

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log(text); 
        let newText = text.toUpperCase();                       //it'll change the text we've written to upper case
        setText(newText);  
        props.showAlert("Converted to Uppercase!",  "success")                               
    }
    const handleLowerClick = () =>{
        console.log(text); 
        let newText = text.toLowerCase();                       //it'll change the text we've written to lower case
        setText(newText);                  
        props.showAlert("Converted to Lowercase!",  "success")                               
    }
    const handleClearClick = () =>{
        console.log(text); 
        let newText = '';                       //it'll change the text we've written to lower case
        setText(newText);            
        props.showAlert("CLeared the text",  "success")                               

    }
    const handleCopy = () => {                         //it'll copy the entire text which we have written written 
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard",  "success")                               
    } 
    const handleExtraSpaces = () => {                          //it'll remove the extra spaces 
        let newText = text.split(/[  ]+ /);
        setText(newText.join(""))
        props.showAlert("Removed Extra Spaces",  "success")
    }
    const handleOnChange = (event) => {
        // console.log("On Change");                //no need to write this clg
        setText(event.target.value)
    }

    const [text,setText] = useState('');   //Here enter text here belongs to Text. And here 2 variables are there text,setText it means when we write something in Text it'll also reflect to setText 
    // text = 'newtext';          //wrong way to change the state
    // setText("newText");  //Correct way to change the state
    return (
        <>
        <div className="container" style={{color:props.mode ==='light' ?'#232442':'white'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='light' ?'white':'#261954',color:props.mode ==='light' ?'#232442':'white'}} id="myBox" rows="8"></textarea>    {/*     here we've to listen for handleOnChange and then we've to set the value of it  by using value={text}. And we've put two {{}} because one curly brac e of javascript nd another curly brace is for object in javascript */}
            </div>    
            <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}> Convert to UpperCase </button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}> Convert to LowerCase </button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}> Clear Text </button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}> Copy Text </button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}> Remove Extra Spaces </button>
        </div>
        <div className="container" style={{color:props.mode ==='light' ?'#232442':'white'}}>
            <h1 className='mt-4'>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>  {/*  if we want bold letters use <b></b>......{return element.length!=0} Here it will say that if the element length != 0 then it'll stay in the array and if = 0 then it'll not stay in the array*/}
            <p>{0.08 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes to read</p>
            <h2 className='mt-4'>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview"}</p>
        </div>
        </>
    )
}
