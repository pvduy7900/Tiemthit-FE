import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import AuthService from "../services/AuthService"

import { useHistory } from "react-router-dom";

export default function SignUp() {

    const [name, setName] = useState([])
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    
    let history = useHistory();

    const signUp = async () => {
        const data = await fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, email: email, password: password }),
        });
        AuthService.login(email, password);
        history.push("/home")
        window.location.reload(false);
    }



    return (
        <div>
            <Form eventKey="profile" title="Sign up">
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

                <button onClick={() => signUp(name, email, password)} className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </Form>
        </div>
    )
}
