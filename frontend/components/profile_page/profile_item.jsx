import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UserPostIndexItem from './user_post_index_items';
import EditFollowButton from './edit_follow_button';

class ProfileItem extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.requestSingleUser(nextProps.match.params.userId);
    }
  }

  componentDidMount() {

    this.props.requestSingleUser(this.props.match.params.userId);
  }


  render() {
    const {user, posts, currentUser} = this.props;

    if (this.props.user) {
      let postText = posts.length === 1 ? " post": " posts";
      let followerText = user.followerIds.length === 1 ? " follower": " followers";

      const userPostIndexItems = posts.map((post) => <UserPostIndexItem
      key={post.id}
      postId={post.id}
      image={post.image_url}
      />);


      return (
        <div className="UserProfile" >
          <div className="upMain" >
            <section className="upMainInfo" >

              <div className="upAvatarCush">
                <div className="upAvatarContain" >
                  <img className="upAvatar" src={user.avatar_url} />
                </div>
              </div>

              <section className="upInfo">

                <section className="upInfoTop">
                  <p className="userName" >{user.username}</p>
                  <EditFollowButton className="editFollow"
                    currentUser={currentUser}
                    user={user}
                    addNewFollow={addNewFollow}
                    unFollow={unFollow}
                  />
                </section>

                <section className="upInfoMid" >
                  <div className="upCount" >
                    <span className="upCountNum" >{posts.length}</span>
                    <span className="upCountText" >{postText}</span>
                  </div>
                  <div className="upCount" >
                    <span className="upCountNum" >{user.followerIds.length}</span>
                    <span className="upCountText" >{followerText}</span>
                  </div>
                  <div className="upCount" >
                    <span className="upCountNum" >{user.followeeIds.length}</span>
                    <span className="upCountText" > following</span>
                  </div>
                </section>

                <section className="upInfoBottom" >
                    <p className="upName" >{user.name}</p>

                    <span className="upBio" >{user.bio}</span>

                </section>

              </section>

            </section><br></br>


            <section className="upPostIndex" >
                  {userPostIndexItems}
            </section>

          </div>


      </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }



}

export default ProfileItem;
