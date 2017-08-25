import React from 'react';
import SessionContainer from './welcome/session_container';
import FeedContainer from './feed/feed_container';
import {Route, Redirect, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfileContainer from './profile_page/profile_container';
import NavBarContainer from './nav_bar/nav_bar_container';


const App = () => (
  <div>
      <NavBarContainer component={NavBarContainer}/>

      <ProtectedRoute path="/" exact component={FeedContainer} />
      <ProtectedRoute path="/users/:userId" component={ProfileContainer} />

    <Switch>
      <AuthRoute path="/signin" component={SessionContainer} />
      <AuthRoute path="/signup" component={SessionContainer} />
    </Switch>
  </div>
);

export default App;
