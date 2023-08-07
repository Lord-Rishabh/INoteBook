/*npm pacakges : 
1. react-router-dom : This is for using routes so that we can make a single page 
                      application.
2. concurrently : This is used so that we can use 'npm run start' and 'nodemon 
                  backend/index.js' using only 1 terminal. First install package and
                  then edit scripts in package.json .
3. cors : we need to install this package in backend/index.js so that our browser can 
          make API call.
*/

import './App.css';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState } from 'react';

function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message , type)=> {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=> {
      setAlert(null)
    }, 1500);
  }

  return (
      <NoteState>
        <HashRouter>
          <Navbar showAlert={showAlert}/> 
          <Alert alert={alert}/>
          <br/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert}/>} >  </Route>
              <Route exact path="/about" element={<About />} > </Route>
              <Route exact path="/Login" element={<Login showAlert={showAlert}/>} > </Route>
              <Route exact path="/Signup" element={<Signup showAlert={showAlert}/>} > </Route>
            </Routes>
          </div>
        </HashRouter>
      </NoteState>
  );
}

export default App;
