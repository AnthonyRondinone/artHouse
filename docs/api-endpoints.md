# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `GET /api/users`
 - Explore - Users Index
- `POST /api/users`
  - Sign-Up
- `GET /api/users/:userId`
  - User Show page
- `PATCH /api/users/:userId`
  - Edit User
- `DELETE /api/users/:userId`
  - Delete User

### Session

- `POST /api/session`
  - Log-in
- `DELETE /api/session`
  - Log-out

### Posts

- `GET /api/posts`
  - fetch posts of users followees
- `POST /api/posts`
  - create New Post
- `GET /api/posts/:postId`
  - post Show modal
- `PATCH /api/posts/:postId`
  - edit post
- `DELETE /api/posts/:postId`
  - delete post


### Comments

- `POST /api/comments`
  - create New comment
- `DELETE /api/comments/:commentId`
  - delete comment

### Likes

  - `POST /api/likes`
    - add like
  - `DELETE /api/likes/:likeId`
    - delete like

### Likes

  - `POST /api/follows`
    - Follow
  - `DELETE /api/follows/:followId`
    - Unfollow
