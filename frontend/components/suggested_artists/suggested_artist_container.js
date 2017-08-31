import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { suggestedUser } from '../../actions/user_actions';
import { addNewFollow, unFollow } from '../../actions/follow_actions';
import SuggestedUserItem from './suggested_user_item';

const mapStateToProps = ( state, ownProps ) => {

  return {
    users: state.entities.users,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    suggestedUser: () => dispatch(suggestedUser()),
    addNewFollow: (follow) => dispatch(addNewFollow(follow)),
    unFollow: (followId) => dispatch(unFollow(followId))
  };
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SuggestedUserItem));
