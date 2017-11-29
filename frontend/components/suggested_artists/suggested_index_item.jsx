import React from 'react';
import { Link } from 'react-router-dom';
import EditFollowButton from '../profile_page/edit_follow_button';

const SuggestedIndexItem = props => {


    const { user, currentUser, addNewFollow, unFollow } = props;

    return(
        <div className="su-container" >
          <div className="su-avatar-contain" >
            <Link
              to={`/users/${user.id}`}><img
              className="su-avatar"
              src={user.avatar_url} />
            </Link>
          </div>

          <Link
            className="su-user-name"
            to={`/users/${user.id}`}><p
            className="su-user-name" >{user.username}</p>
          </Link>

          <EditFollowButton className="su-follow"
            currentUser={currentUser}
            user={user}
            addNewFollow={addNewFollow}
            unFollow={unFollow}
            />
        </div>
    );
};

export default SuggestedIndexItem;
