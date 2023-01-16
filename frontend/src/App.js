import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Components/login";
import SignUp from "./Components/signup";
import Profile from "./Components/Profile";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home"
import axios from 'axios';
import useToken from "./Components/useToken";

function App() {

  const [profileData, setProfileData] = useState(null)
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
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Home token={removeToken}/>
        {!token && token!=="" &&token!== undefined?  
        <Login setToken={setToken} />
        :(
          <>
            <Routes>
              <Route exact path="/profile" element={<Profile token={token} setToken={setToken}/>}></Route>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/' element={<SignUp/>} />
            </Routes>
          </>
        )}
      </div>
    </BrowserRouter>  
  );
}
  
export default App