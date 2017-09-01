import React from 'react';
import SessionContainer from './welcome/session_container';
import FeedContainer from './feed/feed_container';
import {Route, Redirect, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfileContainer from './profile_page/profile_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import NewPostContainer from './create_new_post/new_post_container';
import ImageShowContainer from './image_show/image_show_container';
import SuggestedArtistContainer from './suggested_artists/suggested_artist_container';

const App = () => (
  <div>
      <ProtectedRoute path="/users/:userId/:postId" component={ImageShowContainer} />
      <NavBarContainer component={NavBarContainer}/>
      <ProtectedRoute path="/create" component={NewPostContainer}/>
      <ProtectedRoute path="/welcome" component={SuggestedArtistContainer} />
      <ProtectedRoute path="/" exact={true} component={FeedContainer} />
      <ProtectedRoute path="/users/:userId" component={ProfileContainer} />

    <Switch>
      <AuthRoute path="/signin" component={SessionContainer} />
      <AuthRoute path="/signup" component={SessionContainer} />
    </Switch>
  </div>
);

export default App;
