import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { authUser } from "../../actions/authUser";
import "./login.css";

const mapStateToProps = state => {
  return {
    userInfo: state.auth.userInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authUser: info => {
      dispatch(authUser(info));
    }
  };
};

class Login extends Component {
  responseGoogle = response => {
    console.log(response);
    this.props.authUser(response);
  };

  render() {
    const userInfo = this.props.userInfo;
    if (userInfo) {
      return <Redirect to="/users" />;
    }
    return (
      <div className="login">
        <div>
          <GoogleLogin
            clientId="158614999437-njhi3e2l54hkg6gadfjkbqfhvurv4pgk.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
