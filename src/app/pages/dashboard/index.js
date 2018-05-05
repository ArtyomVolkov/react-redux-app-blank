import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Dashboard from './Dashboard';

class Index extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/dashboard" component={Dashboard}/>
      </Switch>
    );
  }
}

export default Index;
