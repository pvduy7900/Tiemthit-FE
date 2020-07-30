import React, { useState } from 'react'
import { Form } from 'react-bootstrap';

import { useHistory } from "react-router-dom";
import "./SignUp.css";


export default function SignUp() {

    const [name, setName] = useState([])
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    let history = useHistory();

    const signUp = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, email: email, password: password }),
        });
        if(res.status === 200){
            console.log("đăng kí thành công")
        }else{
            console.log("đăng kí không thành công")
        }
        history.push("/home")
    }

    return (
        <div className="d-flex justify-content-center">
            <Form eventKey="profile" title="Sign up" className="signup login-main">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="First name" onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button onClick={(e) => signUp(e)} className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="login">sign in?</a>
                </p>
            </Form>
        </div>
    )
}
