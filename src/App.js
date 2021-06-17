import React from 'react';
import './App.css';
import {GoogleLogin} from 'react-google-login';

function App() {
  const responseGoogle = (response) => {
    console.log("My new response from google is" + response);
  }

  console.log("This is my response from Google: " + responseGoogle());

  if(responseGoogle !== undefined) {
    return (
      <div className="App">
        <h1>Zach is the best student ever! :)</h1>
        <h3>You are logged in! Yay!</h3>
        <p>This is working</p>
        </div>
    ); 
  }
    else {
      return (
        <div>
          <h1>You are not logged in sir!</h1>
          <GoogleLogin 
          clientId='998838005929-3co4r9ejhf13l366vstrad3osu39e348.apps.googleusercontent.com'
          buttonText="Zach wants you to login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          />
        </div>
      )
    }
}

export default App;
