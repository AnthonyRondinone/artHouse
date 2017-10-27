import { combineReducers } from 'redux';
import { usersReducer } from './users_reducer';
import { postsReducer } from './posts_reducer';
import { commentsReducer } from './comments_reducer';
import { bidsReducer } from './bids_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
  bids: bidsReducer
});


export default entitiesReducer;
