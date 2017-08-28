import { values } from 'lodash';


export const selectUsersPosts = (state) => {
  let usersPostsArray = [];
  let artistId = state.ui.userDisplay;
  let artist = state.entities.users[artistId];
  let postIds = artist.postIds;
  for (let i = 0; i < postIds.length; i++) {
      usersPostsArray.push(state.entities.posts[postIds[i]]);
  }
  return usersPostsArray.sort().reverse();
};

export const selectFeedPosts = state => {
  let feedArray = values(state.entities.posts);
  feedArray.sort(function(a, b){
      var keyA = new Date(a.createdAt),
          keyB = new Date(b.createdAt);
      if(keyA < keyB) return -1;
      if(keyA > keyB) return 1;
      return 0;
  });

  return feedArray;

};

export const selectPostComments = (state, ownProps) => {
  let comments = state.entities.comments;
  let commentIds = ownProps.commentIds;
  const postComments = commentIds.map((id) => comments);
  return postComments;
};
