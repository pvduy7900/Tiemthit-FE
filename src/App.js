// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Login from "./components/Login";
// import Homepage from "./components/Homepage";
// import Product from "./components/Product";

// import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/home"><Homepage/></Route>
//         <Route path="/login"><Login /></Route>
//         <Route path="/product"><Product /></Route>
//       </Switch>
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Nav, Form, FormControl, Button, Navbar, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap"
import AuthService from "./services/AuthService";

import Login from "./components/Login";
// import Register from "./components/Register"; // what?
import Home from "./components/Homepage";
// import Profile from "./components/Profile"; //what?
// import BoardUser from "./components/BoardUser"; //what?
// import BoardModerator from "./components/BoardModerator"; // what?
// import BoardAdmin from "./components/BoardAdmin";// what?

const App = () => {
  // const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  // const [showAdminBoard, setShowAdminBoard] = useState(false);
  // const [currentUser, setCurrentUser] = useState(undefined);

  // useEffect(() => {
  //   const user = AuthService.getCurrentUser();

  //   if (user) {
  //     setCurrentUser(user);
  //     setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
  //     setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
  //   }
  // }, []);

  const logOut = () => {
    AuthService.logout();
  };
  const userName = localStorage.getItem('name')
  return (
    <Router>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Butcher</Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link href="#home">Trang chủ</Nav.Link>
          <Nav.Link href="#features">Bảng giá</Nav.Link>
          <Nav.Link href="#pricing">Món ngon</Nav.Link>
        </Nav>

        <Nav className="ml-auto">
          {true ?
            <DropdownButton as={ButtonGroup} title={userName} id="bg-vertical-dropdown-1">
              <Dropdown.Item onClick={() => { logOut() }}>Log out</Dropdown.Item>
            </DropdownButton>
            : <div></div>}
        </Nav>



        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>

      {/* <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav> */}

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} /> */}
        </Switch>
      </div>
      {/* </div> */}
    </Router >
  );
};

export default App;