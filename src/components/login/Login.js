import React, { Component } from 'react';
import { Redirect  } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {login: false}
  }
  
  responseGoogle = (response) => {
    console.log(response);
    this.setState({login: true});
  }

  render() {
    const {login} = this.state;

    if(login){
      return (<Redirect to="/users"/>);
    }
    return (
      <div className="login">
      Login
        <GoogleLogin
          clientId="158614999437-njhi3e2l54hkg6gadfjkbqfhvurv4pgk.apps.googleusercontent.com"
          buttonText="Sign in with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
      </div>
    )
  }
}

