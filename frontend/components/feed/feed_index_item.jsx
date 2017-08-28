import React from 'react';
import { Link } from 'react-router-dom';
import HeartButton from './heart_button';
// import CommentsContainer from '../comment/comments_container';

class FeedIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { id, artistId, avatar, username, image, createdAt, likeIds, liked, commentIds, caption} = this.props;

    let like = likeIds.length === 1 ? " like" : " likes";
    debugger
    return (
      <div >

        <div key={id}>

          <div>
            <Link to={`/users/${artistId}`}><img src={avatar} /></Link>
            <Link to={`/users/${artistId}`}>{username}</Link>
          </div>

          <div>
            <img src={this.props.image}/>
          </div>

          <div>
            <HeartButton liked={liked} />
            <button><img src={images.comment} /></button>
          </div>

          <div>
            <span>{likeIds.length}</span>
            <span>{like}</span>
          </div>

          <div>
            <span>{caption}</span>
          </div>

          


        </div>

      </div>
    );
  }


}


export default FeedIndexItem;
