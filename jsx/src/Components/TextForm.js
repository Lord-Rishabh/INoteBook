import React,{useState} from 'react';

export default function TextForm(props) {

  const handleUpClick = ()=>{
    
    setText(text.toUpperCase()); //This will convert the text in textArea to uppercase.
    props.showAlert("Converted to UpperCase!" , "Success");
  }
  const handleLoClick = ()=>{
    setText(text.toLowerCase()); //This will convert the text in textArea to uppercase.
    props.showAlert("Converted to LowerCase!" , "Success");
  }
/*This function will run when we change the value in textarea, we have to make this 
function because we have fixed the value of textarea to be 'text', so using this function
we can change the value to what user want. */
  const handleOnChange = (event)=>{
//Using this function we are changing value of 'text to 'text' + value entered by user. 
    setText(event.target.value);  
  }
  const [text,setText] = useState("");
  /* correct way to change value of text : setText("enter text");
    wrong way : text="new text"; */
  return (
    <>
    <div style={props.mode==='light' ? {color:'black'} : {color:'white'}}>
      <div className='container my-3'>  
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" placeholder="Enter text here" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="6" 
              style={{backgroundColor: props.mode==='light' ? 'white' : 'grey' ,
                      color: props.mode==='light' ? 'black' : 'white'}}
            ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleLoClick}>Convert to Lowercase</button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
{/* if text is : 'I am  rishabh' then .split will give {'I','am','','rishabh} , as there
is an empty element so to filter this empty element we are using filter method of js.s 
Here text.split(/\s+/) will split text in ' ' and when a user change the line.*/}
        <p>You have written {text.split(/\s+/).filter((element)=>{return element.length!=0}).length  } words and {text.length} characters.</p>
      </div>
    </div>  
    </>
  )
}
