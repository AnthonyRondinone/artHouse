



json.extract! @post, :id, :caption, :liked_by_current_user, :created_at
json.image_url asset_path(@post.image.url)
json.likeId @post.likes.map(&:id)
json.commentId @post.comments.map(&:id)
json.artist_id @post.artist.id
json.artist_username @post.artist.username
json.artist_avatar @post.artist.avatar.url
