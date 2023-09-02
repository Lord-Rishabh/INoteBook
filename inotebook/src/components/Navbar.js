// Use 'rafce' for this snippet
import React from 'react'
import { Link , useLocation , useNavigate } from 'react-router-dom'

const Navbar = (props) => {

  let navigate = useNavigate();

  // We can use this to do specific task when we are at a specific location.
  // We can access current page path name by 'location.pathname' .
  let location = useLocation();
  React.useEffect(() => {
    // Google Analytics
    //  console.log(location.pathname);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    props.showAlert("Logged out Successfully" , "success");
    navigate("/login");
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><i class="fa-solid fa-book"></i>&nbsp;INoteBook</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* Here we are using useLocation to add a class active in current page. */}
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                {/* Here we are using useLocation to add a class active in current page. */}
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} aria-current="page" to="/about">About</Link>
              </li>
            </ul>
            {!localStorage.getItem('token') ? <form className="d-flex" role="search">
              <Link className="btn btn-primary mx-2  " to="/login" role="button">Login</Link>
              <Link className="btn btn-primary" to="/signup" role="button">SignUp</Link>
            </form> : <button onClick={handleLogout} className='btn btn-primary mx-3'>Logout</button>}
          </div>
        </div>
      </nav>
      <br /><br /> 
    </div>
  )
}

export default Navbar
