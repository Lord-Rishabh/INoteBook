import React from 'react';
import PropTypes from 'prop-types';
// import{Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    //use backticks(`) here instead of instead of regular ticks (apostrophe: ').
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` }>
  <div className="container-fluid">
    {/* use 'Link' instead of 'a' and use 'to' instead of 'href' to use react router. */}
    {/* if we use '#' instead of '/' in href, then link will go no where. */}
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        
        {/* <li className="nav-item">
          <a className="nav-link" href="/about">{props.aboutText}</a>
        </li> */}
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
        
      </ul>
      <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
          <label className={`form-check-label text-${props.btn}`} for="flexSwitchCheckDefault">Enable {props.btn} Mode</label>
      </div>
    </div>
    
  </div>
</nav>
  )
}

/*This is used to set default props, in case no props are passed from App.js */
Navbar.defaultProps = {
  title : "Set title here",
  aboutText : "About text here"
}

/*This is used to indicate the types of props used. */
Navbar.propTypes = {
  title : PropTypes.string,
  aboutText : PropTypes.string,
}
