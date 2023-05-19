import './Components/css/navbar.css';
import logo from "./assets/logo-main.png";

function Home(){
    return(
        <main>
            <div className="navbar">
            <div className="search-bar">
                <a href="/home">
                <img src={logo} alt="logo" />
                </a>
                <a href="/find">
                    <button class="button-x" id="button" type="button">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi-search" viewBox="0 0 18 18">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    Trucks near me</span>
                    </button>
                </a>
            </div>
            <div className="customer">
                <a href='/customers'>
                    <button class="button" id="button" type="button">
                    <span>Customers</span>
                    </button>
                </a>
                </div>
            <div className="owner">
                <a href='/owners'>
                    <button class="button" id="button" type="button">
                    <span>Truck Owners</span>
                    </button>
                 </a>
            </div>
            <div className="login">
                <a href="/login">
                    <button class="button" id="button" type="button">
                    <span>Login / Sign up</span>
                    </button>
                </a>
            </div>
        </div>
        <div className="hero-image">
        <div className="hero-text">
            <span>Welcome to Truck Shark</span>
               <div className="wer">
                 <a href="/find">
                <button class="button-75" role="button"><span class="text">Order now from trucks near me</span></button>
                </a>
                </div>
            </div>
        </div>
        </main>
    )
}

export default Home;