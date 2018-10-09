import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from './components/login/Login';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' component={Login}/>
      </Switch>
    );
  }
}

export default App;
