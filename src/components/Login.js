import React, { useState, useEffect } from "react";
import { Button, Form, Container, Tab, Tabs } from 'react-bootstrap';

const ItemsList = () => {

  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

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

    console.log("456")
    const loginUser = await data.json();
    console.log("this is loginuser",loginUser);
    const user = loginUser.data.user.name;
    console.log("cai nay ne",user)
    const token = loginUser.data.token
    console.log(token)
    localStorage.setItem("token", token)
    localStorage.setItem("name",user)
    

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
          <label>First name</label>
          <input type="text" className="form-control" placeholder="First name" />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>

        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
        <p className="forgot-password text-right">
          Already registered <a href="#">sign in?</a>
        </p>


      </Tab>

    </Tabs>
  );
};

export default ItemsList;