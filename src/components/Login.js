import React, { useState, useEffect } from "react";
import { Button, Form, Container, Tab, Tabs } from 'react-bootstrap';
// import history from '../history';


const Login = ({ setLoginUser, history }) => {

  const [name, setName] = useState([])
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

const signUp = async () =>{
  const data = await fetch('http://localhost:5000/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: name, email: email, password: password })
  });

}

  const loginWithEmail = async () => {
    console.log("12", email)
    console.log("12", password)
    const data = await fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password })
    });

    const loginUser = await data.json();

    const user = loginUser.data.user.name;

    const token = loginUser.data.token

    setLoginUser(token, user);

    history.push('/home')
  }

  return (
    <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
      <Tab eventKey="home" title="Login">
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

        <Button variant="primary" onClick={() => loginWithEmail(email, password)} >
          Login
          </Button>

      </Tab>

      <Tab eventKey="profile" title="Sign up">
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


      </Tab>

    </Tabs>
  );
};

export default Login;