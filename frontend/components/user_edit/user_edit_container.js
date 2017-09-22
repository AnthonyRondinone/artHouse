import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateEditUserInfo, requestSingleUser } from '../../actions/user_actions';
import EditForm from './user_edit_form';

const mapStateToProps = ( state, ownProps ) => {
  return {
    currentUser: state.session.currentUser,
    user: state.entities.users[ownProps.match.params.userId]
  };
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return {
    updateEditUserInfo: (userInfo, userId) => dispatch(updateEditUserInfo(userInfo, userId)),
    requestSingleUser: (userId) => dispatch(requestSingleUser(userId))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditForm));
