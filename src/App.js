import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/login/Login';
import UserList from './components/usersList/UserList';
import User from './components/user/User';
import {  withRouter } from 'react-router'
import { connect } from 'react-redux';
import './App.css';
const mapStateToProps = state => {
  return {
    userInfo: state.auth.userInfo
  };
};

 class App extends Component {
  render() {
    return (
     <div className='container'>
     <Switch>
        <PrivateRoute exact path='/' isLoggedIn={false}></PrivateRoute>
        <Route exact path='/auth' component={Login}/>
        <Route exact path='/users' component={UserList}/>
        <Route path='/users/:id' component={User}/>
      </Switch>
    </div>
    );
  }
}

const PrivateRoute = (props) => {
  const isLoggedIn = props.isLoggedIn;
  console.log(isLoggedIn)
  return (
    <Route render={() => 
      isLoggedIn ? (<Redirect to={{pathname: '/users'}}/>) : (<Redirect to={{pathname: '/auth'}}/>)
    }/>
  )
}

export default withRouter(connect(mapStateToProps, null)(App));
