import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { GoogleLogin } from 'react-google-login';

import FacebookLogin from 'react-facebook-login';

class App extends Component {
  render() {
    const responseGoogle = (response) => {
      console.log(response);
    }

    const responseFacebook = (response) => {
      console.log(response);
    }
    return (
      <div className="App">
      <GoogleLogin
    clientId="365233749389-fpq28ljap69pavj1ts5ntvs6k44p1mk0.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />
        
        
  <FacebookLogin
    appId="629812180770646"
    autoLoad={true}
    fields="name,email,picture"
    
    
    callback={responseFacebook} />

      </div>
    );
  }
}

export default App;



