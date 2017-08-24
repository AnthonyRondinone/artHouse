import merge from 'lodash/merge';
import { RECEIVE_SINGLE_USER } from '../actions/user_actions';

const uiReducer = (state = {}, action) => {
let newState;
let newObject = {};

switch (action.type) {
  case RECEIVE_SINGLE_USER:
    return merge({}, state, {userDisplay: action.user.id});
  default:
    return state;
}

};

export default uiReducer;
