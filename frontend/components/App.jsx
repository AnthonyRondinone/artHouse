import React from 'react';
import SessionContainer from './welcome/session_container';
import {Route, Redirect, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfileContainer from './profile_page/profile_container';


const App = () => (
  <div>
      <ProtectedRoute path="/" exact component={SessionContainer} />

    <Switch>
      <AuthRoute path="/signin" component={SessionContainer} />
      <AuthRoute path="/signup" component={SessionContainer} />
    </Switch>
  </div>
);

export default App;
