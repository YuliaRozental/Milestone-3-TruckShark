import axios from "axios";

function Home(props) {

  function logMeOut() {
    axios({
      method: "POST",
      url:"/logout",
    })
    .then((response) => {
       props.token()
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}

    return(
        <header className="App-header">
         <h1>Welcome to the Truck Shark</h1>
          <button onClick={logMeOut}> 
          Logout
          </button>
        </header>
    )
}

export default Home;