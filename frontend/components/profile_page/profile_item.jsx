import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import UserPostIndexItem from './user_post_index_items'

class ProfileItem extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSingleUser(this.props.match.params.userId);
  }


  render() {
    // debugger
    const {user, posts} = this.props;

    if (this.props.user) {
      let postText = posts.length === 1 ? "post": "posts";
      let followerText = user.followerIds.length === 1 ? "follower": "followers";

      const userPostIndexItems = posts.map((post) => <UserPostIndexItem
      key={post.id}
      image={post.image_url}
      />);


      return (
        <div>

        <section className="upMainInfo" >

          <div className="upAvatarContain" >
            <img className="upAvatar" src={user.avatar_url} />
          </div>

          <section className="upInfo">

            <section className="upInfoTop">
              <h1>{user.username}</h1>
              <button>Edit Profile</button>
            </section>

            <section className="upInfoMid" >
              <div className="upPostCount" >
                <span className="upCount" >{posts.length}</span>
                <span className="upCountText" >{postText}</span>
              </div>
              <div className="upFollowersCount" >
                <span className="upFollowers" >{user.followerIds.length}</span>
                <span className="upFollowersText" >{followerText}</span>
              </div>
              <div className="upFollowingCount" >
                <span className="upFollowing" >{user.followeeIds.length}</span>
                <span className="upFollowersText" >following</span>
              </div>
            </section>

            <section className="upInfoBottom" >
              <h2 className="upName" >{user.name}</h2>
              <span className="upBio" >{user.bio}</span>
            </section>

          </section>

        </section>


        <section className="upPostIndex" >
          {userPostIndexItems}
        </section>


      </div>
      );
    } else {
      return (
        <div>broken</div>
      );
    }
  }



}

export default ProfileItem;
