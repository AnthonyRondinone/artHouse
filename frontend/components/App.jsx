import React from 'react';
import SessionContainer from './welcome/session_container';
import {Route, Redirect} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';


const App = () => (
  <div>
      <Route path="/" exact />
      <AuthRoute path="/signin" component={SessionContainer} />
      <AuthRoute path="/signup" component={SessionContainer} />
  </div>
);

export default App;
