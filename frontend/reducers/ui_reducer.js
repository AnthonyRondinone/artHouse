import merge from 'lodash/merge';
import { RECEIVE_SINGLE_USER } from '../actions/user_actions';
import { RECEIVE_POST_DETAIL } from '../actions/post_actions';

const defaultState = {modal: false};

const uiReducer = (state = defaultState, action) => {

let newState;
let newObject = {};

switch (action.type) {
  case RECEIVE_SINGLE_USER:
    return merge({}, state, {userDisplay: action.user.id});
  case RECEIVE_POST_DETAIL:
    debugger
    newState = merge({}, state, {modal: true});
    return newState;
  default:
    return state;
}

};

export default uiReducer;
