import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import FeedIndexItem from './feed_index_item';


class Feed extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.importFeedPosts();
  }


  render() {

    const { posts, currentUser, addNewLike, unLike } = this.props;

    const feedIndexItems = posts.map((post) => <FeedIndexItem
    id={post.id}
    key={post.id}
    artistId={post.artistId}
    avatar={post.avatar}
    username={post.username}
    image={post.image}
    createdAt={post.createdAt}
    likerIds={post.likerIds}
    liked={post.liked}
    commentIds={post.commentIds}
    caption={post.caption}
    posts={posts}
    addNewLike={addNewLike}
    currentUserId={currentUser.id}
    unLike={unLike}
    />);

    if (posts.length === 0) {
      return (
        <div>Nothing</div>
      );
    } else {
      return (
        <div className='feed-contain'>
          <div className='main-feed' >
            {feedIndexItems}
          </div>
        </div>
      );
    }

  }
}

export default Feed;
