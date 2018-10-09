import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

export default class Login extends Component {

  render() {
    return (
      <div className="login">
        <GoogleLogin
          clientId="158614999437-njhi3e2l54hkg6gadfjkbqfhvurv4pgk.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />,
      </div>
    )
  }
}

