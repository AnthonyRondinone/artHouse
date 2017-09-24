

json.post do

    json.id @post.id
    json.artistId @post.artist.id
    json.username @post.artist.username
    json.avatarThumb @post.artist.avatar.url(:thumb)
    json.imageOrig asset_path(@post.image.url(:original))
    json.caption @post.caption
    json.createdAt @post.created_at
    json.commentIds @post.comments.map(&:id)
    json.likerIds @post.likes.map(&:user_id)

end

json.comments do
  @post.comments.each do |comment|
    json.set! comment.id do
      json.id comment.id
      json.author comment.author.username
      json.authorId comment.author_id
      json.postId comment.post_id
      json.body comment.body
    end
  end
end
