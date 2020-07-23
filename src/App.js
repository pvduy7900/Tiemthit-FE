
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavbarApp from "./components/NavbarApp"
import Login from "./components/Login";
import Home from "./components/Homepage";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";


const App = () => {

  const [userName, setUserName] = useState("")
  const [token, setToken] = useState("")
  const [productName, setProductName] = useState("")

  const onLogin = (userName, token) => {
    console.log('onLogin()', userName, token)
    setUserName(userName);
    setToken(token)
  }

  const onLogout = () => {
    setUserName("");
    setToken("")
  }

  const sendProductName = (product) => {
    setProductName(product)
  }

  return (
    <Router>

      <NavbarApp userName={userName} sendProductName={sendProductName} onLogout={onLogout} />
      <div className="container mt-3 cateAndProduct">
        <Switch>
          <Route exact path={["/", "/home"]} render={(props) => <Home nameProduct={productName} {...props} />} />
          <Route exact path="/login" render={(props) => <Login onLogin={onLogin} />} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router >
  );
};

export default App;


