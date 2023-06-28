
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react';
// import About from './Components/About';s
/* This is used for using react router, but first we need to install 
it's package using : npm i react-router-dom */
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


let name = "Rishabh"
function App() {
  
  const [mode, setMode] = useState('light');
  const [btn, setbtn] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },2500)
  } 
  const toggleMode = ()=>{
    if(mode === 'light') {
      setMode('dark');
      setbtn('light');
      document.body.style.backgroundColor = '#0B2447';
      showAlert("Dark mode has been enabled" , "Success" );
    }
    else {
      setMode('light');
      setbtn('dark');
      document.body.style.backgroundColor = '#ffffff';
      showAlert("Light mode has been enabled" , "Success" );
    }
  } 

  return (
    
    <>
    {/*This is a JSX comment. We use empty brackets because JSX can only return one tag
    , also while using tags that doesn't have closing tag needs to be end with backward
    slash like this :  */}
    {/* // We have commented react router because it causes problem when we host it to github
     <Router>
      <Navbar title={name} aboutText="About" mode={mode} toggleMode={toggleMode} btn={btn}/>
      <Alert alert={alert}/>
      
        // A <Routes> looks through its children <Route>s and
        //  renders the first one that matches the current URL. 
        <div className='container'>
          <Routes>

            <Route exact path="/" element={<TextForm heading="Enter text to Analyze" mode={mode} showAlert={showAlert} />}>         
            </Route>
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
          
          </Routes>
        </div>
    </Router> */}
    <Navbar title={name} aboutText="About" mode={mode} toggleMode={toggleMode} btn={btn}/>
    <Alert alert={alert}/>
    <div className='container'>
      <TextForm heading="Enter text to Analyze" mode={mode} showAlert={showAlert} />
    </div>
    </>
  );
}

export default App;
