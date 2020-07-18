import axios from "axios";

const API_URL = "http://localhost:5000/auth/";

const signUp = (name, email, password) => {
  return axios.post("http://localhost:5000/users" + "signup", {
    name,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.data.token) {
        localStorage.setItem("token",response.data.data.token);
        localStorage.setItem("name", response.data.data.user.name);
      }
      console.log("1234155", response)
      return response.data;
      
    });
    
};

const logout = () => {
  localStorage.removeItem("name");
  localStorage.removeItem("token");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("name"));
};

export default {
  signUp,
  login,
  logout,
  getCurrentUser,
};