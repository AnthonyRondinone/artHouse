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

    const { posts, currentUser } = this.props;

    const feedIndexItems = posts.map((post) => <FeedIndexItem
    id={post.id}
    key={post.id}
    artistId={post.artistId}
    avatar={post.avatar}
    username={post.username}
    image={post.image}
    createdAt={post.createdAt}
    likeIds={post.likeIds}
    liked={post.liked}
    commentIds={post.commentIds}
    caption={post.caption}
    posts={posts}
    />);

    return (
      <div>
        {feedIndexItems}
      </div>
    );

  }
}

export default Feed;
