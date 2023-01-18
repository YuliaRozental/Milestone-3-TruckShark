import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUp from "./Components/Signup";
import Find from "./Components/Find";
import Profile from "./Components/Profile";
import NavBar from "./Components/NavBar";
import Logout from "./Components/Logout";
import Customers from "./Components/Customers";
import Owners from "./Components/Owners";
import LogIn from './Components/LogIn';
import axios from 'axios';
import useToken from "./Components/useToken";
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
      <NavBar />
      <Routes>
        <Route exact path="/customers" element={Customers} />
        <Route exact path="/owners" element={Owners} />
        <Route exact path="/login" element={LogIn()} />
        <Route exact path="/find" element={Find} />
      </Routes>
    </Router>
  );
  }

export default App;