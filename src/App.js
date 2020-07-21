
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Nav, Form, FormControl, Button, Navbar, Dropdown, DropdownButton } from "react-bootstrap"
import AuthService from "./services/AuthService";

import Login from "./components/Login";
import Home from "./components/Homepage";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";


const App = () => {

  // const [username, setUsername] = useState(localStorage.getItem("name"));
  const username = localStorage.getItem("name")
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') !== null);

  const logOut = () => {
    AuthService.logout();
    setLoggedIn(false);
  };

  return (
    <Router>
      {/* day la navbar */}
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="home">Butcher</Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link href="home">Trang chủ</Nav.Link>
          <Nav.Link href="price">Bảng giá</Nav.Link>
          <Nav.Link href="delicious">Món ngon</Nav.Link>
        </Nav>

        <Nav className="ml-auto">

          {loggedIn ?
            <DropdownButton title={username} id="bg-vertical-dropdown-1">
              <Dropdown.Item onClick={() => logOut()}>Log out</Dropdown.Item>
            </DropdownButton>
            :
            <Nav.Link id="bg-vertical-dropdown-1" href="login">Tài khoản</Nav.Link>}

        </Nav>

        <Button variant="outline-primary"> <Nav.Link href="SignUp">Sign up</Nav.Link></Button>
        <Button variant="outline-primary"> <Nav.Link href="cart"> Giỏ hàng </Nav.Link></Button>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
      {/* ket thuc navbar */}

{/* jumbotron here */}
{/* ket thuc jumbotron */}

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/cart" component={Cart} />

        </Switch>
      </div>

      {/* start footer */}
      <div className="main-footer">
        <div className="container">
          <div className="row ">
            {/* column 1 */}
            <div className="col-md-4 col-sm-5">
              <h4>lorem ipsum</h4>
              <ul>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
              </ul>
            </div>
            {/* column 2 */}
            <div className="col-md-4 col-sm-5">
              <h4>lorem ipsum</h4>
              <ul>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
              </ul>
            </div>
            {/* column 3 */}
            <div className="col-md-4 col-sm-6">
              <h4>lorem ipsum</h4>
              <ul>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* stop footer */}

    </Router >
  );
};

export default App;


