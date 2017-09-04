import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class EditFollowButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleUnfollow = this.handleUnfollow.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
  }

  handleUnfollow(e) {
    e.preventDefault();
    this.props.unFollow(this.props.user.id);
  }

  handleFollow(e) {

    e.preventDefault();
    this.props.addNewFollow({follow: {
      follower_id: this.props.currentUser.id,
      followee_id: this.props.user.id
    }});
  }



  render() {
    const {user, currentUser} = this.props;
    if (currentUser) {
      if (this.props.match.params.userId === String(currentUser.id)) {
        return (
          <Link to={`/users/${currentUser.id}/edit`} >
            <button className="editFollowing" >Edit Profile</button>
          </Link>
        );
      } else if ((this.props.match.params.userId !== String(currentUser.id)) || currentUser === null) {

          let followState = user.followerIds.includes(currentUser.id) ? "Following" : "Follow";

          switch(followState) {
            case "Following":
            return (
              <button className="editFollowing" onClick={this.handleUnfollow} >{followState}</button>
            );
            case "Follow":
            return (
              <button className="editFollow" onClick={this.handleFollow} >{followState}</button>
            );
          }
      }
    } else {
      return (
        <div></div>
      );
    }

  }



}


export default withRouter(EditFollowButton);
