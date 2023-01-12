import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Components/login';
import SignUp from "./Components/signup";
import axios from 'axios';

function App() {

  const [profileData, setProfileData] = useState(null)

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

  return (
    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container"> 
        <Link className="navbar-brand" to={'/sign-in'}>
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <p>To get your profile details: </p><button onClick={getData}>Click me</button>
            {profileData && <div>
              <p>Profile name: {profileData.profile_name}</p>
              <p>About me: {profileData.about_me}</p>
            </div>
            }
            <Link className="nav-link" to={'/sign-in'}>
                Login
            </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/sign-up'}>
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="auth-wrapper">
      <div className="auth-inner">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </div>
      <h3>Customer Login</h3>
    </div>
    </Router>
  )
  }
  
export default App