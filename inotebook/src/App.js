/*npm pacakges : 
1. react-router-dom : This is for using routes so that we can make a single page 
                      application.
2. concurrently : This is used so that we can use 'npm run start' and 'nodemon 
                  backend/index.js' using only 1 terminal. First install package and
                  then edit scripts in package.json .

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

function App() {
  return (
    <NoteState>
        <HashRouter>
          <Navbar />
          <Alert message="good day"/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} >  </Route>
              <Route exact path="/about" element={<About />} > </Route>
            </Routes>
          </div>
        </HashRouter>
    </NoteState>
  );
}

export default App;
