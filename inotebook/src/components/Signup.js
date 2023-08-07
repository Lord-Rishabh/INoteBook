import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/api/auth/createuser";
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password }), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      // Save the authToken and redirect
      localStorage.setItem('token', json.authToken);
      props.showAlert("Account Created Successfully" , "success");
      navigate("/");
    }
    else {
      props.showAlert("Invalid Details" , "danger");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <>
      <h1>Create a account to use iNoteBook</h1>
      <form onSubmit={handleSubmit}>

        <div className="my-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input onChange={onChange} type="text" className="form-control" required minLength={3} id="name" name='name' />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input value={credentials.email} onChange={onChange} type="email" className="form-control" id="email" name='email' required aria-describedby="emailHelp" />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input value={credentials.password} onChange={onChange} type="password" className="form-control" required minLength={5} id="password" name='password' />
        </div>

        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input onChange={onChange} type="password" className="form-control" id="cpassword" required minLength={5} name='cpassword' />
        </div>

        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
    </>
  )
}

export default Signup