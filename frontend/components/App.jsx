import React from 'react';
import SessionContainer from './welcome/session_container';
import {Route, Redirect, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
      <ProtectedRoute path="/" exact />

    <Switch>
      <AuthRoute path="/signin" component={SessionContainer} />
      <AuthRoute path="/signup" component={SessionContainer} />
    </Switch>
  </div>
);

export default App;
