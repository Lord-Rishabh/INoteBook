import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = (props) => {

    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = "http://localhost:5000/api/auth/loginuser";
        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }), // body data type must match "Content-Type" header
        });
        const json = await response.json();
        console.log(json);

        if (json.success) {
            // Save the authToken and redirect
            localStorage.setItem('token', json.authToken);
            props.showAlert("Logged in successfully" , "success");
            navigate("/");
        }
        else {
            props.showAlert("Invalid Credentials" , "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <h1> Login to continue to iNoteBook </h1>
            <form onSubmit={handleSubmit}>
                <div className="my-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input value={credentials.email} onChange={onChange} type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input value={credentials.password} onChange={onChange} type="password" className="form-control" id="password" name='password' />
                </div>
                <button type="submit" className="btn btn-primary" >Login</button>
            </form>
        </>
    )
}

export default Login