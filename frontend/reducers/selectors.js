import { values } from 'lodash';


export const selectUsersPosts = ( state, artistId) => {

  let usersPostsArray = [];
  let artist = state.entities.users[artistId];
  let postIds = artist.postIds;
  for (let i = 0; i < postIds.length; i++) {
      usersPostsArray.push(state.entities.posts[postIds[i]]);
  }
  usersPostsArray.sort(function(a, b){
      var keyA = a.id,
          keyB = b.id;
      if(keyA < keyB) return -1;
      if(keyA > keyB) return 1;
      return 0;
  });

  return usersPostsArray.reverse();

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

  return feedArray.reverse();

};

export const selectPostComments = (state, ownProps) => {
  let comments = state.entities.comments;
  let commentIds;
  let postComments;
  if(ownProps.commentIds) {
    commentIds = ownProps.commentIds;
    postComments = commentIds.map((id) => comments[id]);
  } else {
    postComments = [];
  }
  return postComments;
};

export const selectSuggestedUsers = (state) => {
  let suggestedUsersArray = values(state.entities.users);
  return suggestedUsersArray;
};

export const selectUserBids = state => {
  let userBidsArray = values(state.entities.bids);

  const losingBids = userBidsArray.reduce((filteredArr, bid) => {
    if (state.session.currentUser.id !== bid.topBid.user_id) filteredArr.push(bid);
    return filteredArr;
  }, []);

  const winningBids = userBidsArray.reduce((filteredArr, bid) => {
    if (state.session.currentUser.id === bid.topBid.user_id) filteredArr.push(bid);
    return filteredArr;
  }, []);

  losingBids.sort((a, b) => {
      var keyA = new Date(a.createdAt),
          keyB = new Date(b.createdAt);
      if(keyA < keyB) return -1;
      if(keyA > keyB) return 1;
      return 0;
  });

  winningBids.sort((a, b) => {
      var keyA = new Date(a.createdAt),
          keyB = new Date(b.createdAt);
      if(keyA < keyB) return -1;
      if(keyA > keyB) return 1;
      return 0;
  });

  let sortedLosingBids = losingBids.reverse();
  let sortedWinningBids = winningBids.reverse();

  return sortedLosingBids.concat(sortedWinningBids);

};
