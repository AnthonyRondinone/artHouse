import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class EditFollowButton extends React.Component {
  constructor(props) {
    super(props);
  }





  render() {
    const {user, currentUser} = this.props;

    if (currentUser) {
      if (this.props.match.params.userId === String(currentUser.id)) {
        return (
          <Link to={`/users/${currentUser.id}/edit`} >
            <button className="editFollow" >Edit Profile</button>
          </Link>
        );
      } else if ((this.props.match.params.userId !== String(currentUser.id)) || currentUser === null) {
        return (
          <button className="editFollow" >Follow</button>
        );
      }
    } else {
      return (
        <div></div>
      );
    }

  }



}


export default withRouter(EditFollowButton);
