import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from "./users/Signup";
import Find from "./Components/Find";
import Profile from "./Components/Profile";
import Home from "./Home";
import Logout from "./users/Logout";
import Customers from "./Components/Customers";
import Owners from "./Components/Owners";
import LogIn from './users/LogIn';
import Error404 from './Error404';
import axios from 'axios';
import useToken from "./users/useToken";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [profileData, setProfileData] = useState(null);
  const { token, removeToken, setToken } = useToken();

  function getData() {
    axios({
      method: "GET",
      url:"/profile",
    })
    .then((response) => {
      const res =response.data
      setProfileData(({
        profile_name: res.name,
        about_me: res.about}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}


//sets up all routes 

  return (
    <Router>
      <Home />
      <Routes>
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/customers" element={<Customers />} />
        <Route exact path="/owners" element={<Owners />} />
        <Route exact path="/finds" element={<Find />} />
      </Routes>
    </Router>
  );
  }

export default App;