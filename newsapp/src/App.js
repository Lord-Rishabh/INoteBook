import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {

  // We have make a file named .env.local to store our apiKey. And we are passing it as prop.
  const apiKey = process.env.react_app_api;
  const [progress, setProgress] = useState(0)


  return (
    <>
      <div>
        <HashRouter>
          <LoadingBar
            color='#f11946'
            progress={progress}
            waitingTime='300'
          />
          <Navbar />
          <Routes>

            <Route path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="home" category='' />} > </Route>

            <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" category='business' />}> </Route>
            <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" category='entertainment' />}> </Route>
            <Route exact path="/general" element={<News apiKey={apiKey} setProgress={setProgress} key="general" category='general' />}> </Route>
            <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" category='health' />}> </Route>
            <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" category='science' />}> </Route>
            <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" category='sports' />}> </Route>
            <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" category='technology' />}> </Route>

          </Routes>
        </HashRouter>
      </div >
    </>
  )
}
export default App;

// Class Based Component 

/*
// Use rcc for this snippet
import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

// We have make a file named .env.local to store our apiKey. And we are passing it as prop.
  apiKey = process.env.react_app_api;
  state = {
    progress : 0,
  }
  setProgress = (progress) => {
    this.setState({progress : progress})
  }
  render() {
    return (
      <>
        <div>
          <HashRouter>
            <LoadingBar
              color='#f11946'
              progress={this.state.progress}
              waitingTime='300'
            />
            <Navbar />
            <Routes>

              <Route path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="home" category='general' />} > </Route>

              <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" category='business' />}> </Route>
              <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" category='entertainment' />}> </Route>
              <Route exact path="/general" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" category='general' />}> </Route>
              <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" category='health' />}> </Route>
              <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" category='science' />}> </Route>
              <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" category='sports' />}> </Route>
              <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" category='technology' />}> </Route>

            </Routes>
          </HashRouter>
        </div >
      </>

    )
  }
}
 
 
*/