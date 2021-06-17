import React from 'react';
import './App.css';
import {GoogleLogin} from 'react-google-login';

function App() {
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  }

  return (
    <div className="App">
      <h1>Zach is the best student ever! :)</h1>
      <GoogleLogin 
      clientId='998838005929-3co4r9ejhf13l366vstrad3osu39e348.apps.googleusercontent.com'
      buttonText="Zach wants you to login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      />
      </div>
  );
}

export default App;
