import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS, login, logout, signup } from '../actions/session_actions';
import { RECEIVE_FOLLOW, DELETE_FOLLOW } from '../actions/follow_actions';
import { merge } from 'lodash';


const defaultState = Object.freeze({
  currentUser: null,
  errors: []
});


export const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.currentUser, errors: []};
    case RECEIVE_ERRORS:
      return {currentUser: null, errors: action.errors};
    case CLEAR_ERRORS:
      return Object.assign({}, state, {errors: []});
    case RECEIVE_FOLLOW:
      newState = merge({}, state);
      newState.currentUser.followeeIds.push(action.follow.followee_id);
      return newState;
    case DELETE_FOLLOW:
      newState = merge({}, state);
      let index = newState.currentUser.followeeIds.indexOf(action.follow.followee_id);
      newState.currentUser.followeeIds.splice(index, 1);
      return newState;
    default:
      return state;
  }
};
