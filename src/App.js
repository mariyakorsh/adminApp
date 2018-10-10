import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from './components/login/Login';
import UserList from './components/usersList/UserList';
import User from './components/user/User';

class App extends Component {
  render() {
    return (
     <div>
     <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/users' component={UserList}/>
        <Route path='/users/:id' component={User}/>
      </Switch>
    </div>
    );
  }
}

export default App;
