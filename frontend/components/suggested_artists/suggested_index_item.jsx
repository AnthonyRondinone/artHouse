import React from 'react';
import { Link } from 'react-router-dom';
import EditFollowButton from '../profile_page/edit_follow_button';

class SuggestedIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { user, currentUser, addNewFollow, unFollow } = this.props;
    debugger
    return(
      <div>
        <div className="upAvatarContain" >
          <img className="upAvatar" src={user.avatar_url} />
        </div>

        <p className="userName" >{user.username}</p>

          <EditFollowButton className="editFollow"
            currentUser={currentUser}
            user={user}
            addNewFollow={addNewFollow}
            unFollow={unFollow}
          />

      </div>
    );

  }


}

export default SuggestedIndexItem;
