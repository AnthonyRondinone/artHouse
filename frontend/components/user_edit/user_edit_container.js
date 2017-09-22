import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateEditUserInfo } from '../../actions/user_actions';
import EditForm from './user_edit_form';

const mapStateToProps = ( state ) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    updateEditUserInfo: (userInfo, userId) => dispatch(updateEditUserInfo(userInfo, userId))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditForm));
