```js
{
  entities: {
    users: {
      id: 1,
      username: "Anthony_Rondinone",
      profileImg: "url...",
      name: "Anthony"
      website: "www...."
      bio: "About user"
      email: "anthony@..."
      post_id: [1, 2, 3, 4]
      like_id: [1, 2, 3, 4]
      commentsId: [1, 2, 3, 4]
      followerId: [1, 2, 3, 4]
      followedArtistId: [1, 2, 3, 4]
    }
    posts: {
      id: 1
      username: "Anthony_Rondinone"
      profileImg: "url...",
      caption: "cool caption"
      url: "url..."
      artistId: 23
      commentsId: [1, 2, 3, 4]
      likesId: [1, 2, 3, 4]
      liked_by_current_user: true/false
      create_at: time
    }
    comments: {
      id: 6
      username: "Anthony_Rondinone",
      body: "comment"
      likesId: [1, 2, 3, 4]
      user_id: 3
      postId: 2
    }
    likes: {
      id: 2
      likableId: 2
      user_id: 3
      like_type: "comment or post"
    }
  }
  session: {
    id: 2
    username: "anthony_rondinone"
    profileImg: "url...",
    errors: [errors]
  }

}
```
