import { connect } from 'react-redux';
// import ProfileItem from './profile_item';
import { requestSingleUser } from '../../actions/user_actions';

const mapStateToProps = ( state, ownProps ) => {
  return {
    user: state.entities.users[ownProps.match.params.userId]
  };
};


export default withRouter (connect(mapStateToProps, mapDispatchToProps)(FeedItem));
// LOOK AT THIS, setting this up to get userID and pass it to FeedItem that still needs to be created_at
// added route but it's not working yet, will break
