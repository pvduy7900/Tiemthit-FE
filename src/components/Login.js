import React, { useState } from "react";
import { Button, Form  } from 'react-bootstrap';

import AuthService from "../services/AuthService"

import { useHistory } from "react-router-dom";


const Login = () => {

 
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  let history = useHistory();

  const logIn = (email, password) => {
    AuthService.login(email, password);
    history.push("/home")
    window.location.reload(false);

  };


  return (
  
      <Form eventKey="home" title="Login">
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

        <Button variant="primary" onClick={() => logIn(email, password)} >
          Login
          </Button>

      </Form>
  );
};

export default Login;