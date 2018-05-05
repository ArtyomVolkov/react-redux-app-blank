import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
// Pages
import Dashboard from '../../pages/dashboard/index';

import Page404 from '../../pages/404/Page404';

class Main extends Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="*" component={Page404}/>
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default Main;