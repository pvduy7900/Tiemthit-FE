
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavbarApp from "./components/NavbarApp"
import Login from "./components/Login/Login";
import Home from "./components/Homepage/Homepage";
import SignUp from "./components/SignUp/SignUp";
import Cart from "./components/Cart";
import CreateProduct from "./components/CreateProduct/CreateProduct";


const App = () => {

  const [user, setUser] = useState("")
  const [productName, setProductName] = useState("")
  const [quan, setQuan] = useState("")
  // refresh app call function, send token to back end, back end 
  useEffect(() => {
    reLoadPage()
  }, [])


  const reLoadPage = async () => {
    const token = localStorage.getItem("token")
    const data = await fetch(`http://localhost:5000/users/me`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token: token }),
    });
    const res = await data.json()
    setUser(res.data)
  }

  const onLogin = (user) => {
    console.log('onLogin()', user)
    setUser(user);
  }

  const sendProductName = (product) => {
    setProductName(product)
  }
  const getQuantity = (quan) => {
    setQuan(quan)
  }
  return (
    <Router>

      <NavbarApp user={user} sendProductName={sendProductName} quan={quan}/>
      <Switch>
        <Route exact path={["/", "/home"]} render={(props) => <Home getQuantity={getQuantity} user={user} nameProduct={productName} {...props} />} />
        <Route exact path="/login" render={(props) => <Login onLogin={onLogin} />} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/createNewProduct" component={CreateProduct} />

      </Switch>
    </Router >
  );
};

export default App;


