import React from 'react';
import '../Components/css/navbar.css';
import logo from "../assets/logo.png";


function NavBar(){
    return(
        <div className="navbar">
            <div className='App-logo'>
                <a href="/home">
                    <img src={logo} alt="logo" />
                </a>
            </div>
        <nav className="group">
                <div class="search-bar">
                    <a href="/find">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 18 18">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <span>Trucks near me</span>
                    </a>
                </div>
                <div class="customer">
                    <a href='/customers'>
                    <button class="button" id="button" type="button">
                    <span>Customers</span>
                    </button>
                    </a>
                </div>
                <div class="owner">
                    <a href='/owners'>
                    <button class="button" id="button" type="button">
                    <span>Truck Owners</span>
                    </button>
                    </a>
                </div>
        </nav>
        <div className="login">
            <a href="/login">
            <button class="button" id="button" type="button">
            <span>Login / Sign up</span>
            </button>
            </a>
        </div>
        </div>
    )
}

export default NavBar