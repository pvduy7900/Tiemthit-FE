import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = (props) => {

  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [message, setMessage] = useState("")
  let history = useHistory();

  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      console.log("Need email and password");
      return;
    }

    const data = await fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    const res = await data.json()
    if (res.data && res.data.token) {
      localStorage.setItem("token", res.data.token);
      props.onLogin(res.data.user) // truyen project user va token qua app.js
      history.push("/home")
    } else {
      setMessage(res.message)
    }
  }

  return (
    <div className="d-flex justify-content-center login-main">
      <div className="container login-main">
        <Form eventKey="home" title="Login" className="login">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Button variant="primary" onClick={(e) => onFormSubmit(e)}>
            Login
          </Button>
          <h6>{message}</h6>
        </Form>
      </div>
    </div>
  );
};

export default Login;