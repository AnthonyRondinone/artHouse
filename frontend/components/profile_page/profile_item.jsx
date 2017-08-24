import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import UserPostIndexItem from './user_post_index_items';

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
      let postText = posts.length === 1 ? " post": " posts";
      let followerText = user.followerIds.length === 1 ? " follower": " followers";

      const userPostIndexItems = posts.map((post) => <UserPostIndexItem
      key={post.id}
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
                  <button className="editFollow">Edit Profile</button>
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
        <div>broken</div>
      );
    }
  }



}

export default ProfileItem;
