import { values } from 'lodash';


export const selectUsersPosts = (state) => {
  let usersPostsArray = [];
  let artistId = state.ui.userDisplay;
  let artist = state.entities.users[artistId];
  let postIds = artist.postIds;
  for (let i = 0; i < postIds.length; i++) {
      usersPostsArray.push(state.entities.posts[postIds[i]]);
  }
  return usersPostsArray;
};
