import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class EditFollowButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      if (this.props.match.params.userId === String(this.props.currentUser.id)) {
        return (
          <button className="editFollow" >Edit Profile</button>
        );
      } else if ((this.props.match.params.userId !== String(this.props.currentUser.id)) || this.props.currentUser === null) {
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
