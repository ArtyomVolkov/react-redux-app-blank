import React from 'react';
import {Switch, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
// Pages
import Page404 from '../pages/404/Page404';
import Dashboard from '../pages/dashboard';

const IndexRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="*" component={Page404}/>
      </Switch>
    </BrowserRouter>
  );
};

export default IndexRoute;
