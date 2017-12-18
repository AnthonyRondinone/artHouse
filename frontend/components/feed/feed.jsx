import React from 'react';
import FeedIndexItem from './feed_index_item';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.currentUser.followeeIds.length === 0) {
      this.props.history.push('/welcome');
    } else {
      this.props.importFeedPosts();
    }
  }

  render() {
    const {
      posts,
      currentUser,
      addNewLike,
      unLike,
      deletePost,
      openDelete,
      closeDelete
    } = this.props;

    const feedIndexItems = posts.map((post) => <FeedIndexItem
      id={post.id}
      key={post.id}
      artistId={post.artistId}
      avatarThumb={post.avatarThumb}
      username={post.username}
      imageOrig={post.imageOrig}
      createdAt={post.createdAt}
      likerIds={post.likerIds}
      liked={post.liked}
      commentIds={post.commentIds}
      caption={post.caption}
      addNewLike={addNewLike}
      currentUserId={currentUser.id}
      unLike={unLike}
      bidIds={post.bidIds}
      topBid={post.topBid}
      deletePost={deletePost}
      openDelete={openDelete}
      closeDelete={closeDelete}
      deleteDropdown={post.deleteDropdown}
    />);

    return (
      <div className='feed-contain'>
        <div className='main-feed' >
          {feedIndexItems}
        </div>
      </div>
    );
  }
}

export default Feed;
