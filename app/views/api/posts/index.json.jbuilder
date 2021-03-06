


json.posts do
  @followees.each do |followee|
    followee.posts.each do |post|
      json.set! post.id do
        json.id post.id
        json.artistId followee.id
        json.username followee.username
        json.avatarThumb followee.avatar.url(:thumb)
        json.imageOrig post.image.url(:original)
        json.caption post.caption
        json.createdAt post.created_at
        json.commentIds post.comments.map(&:id)
        json.likerIds post.likes.map(&:user_id)
        json.bidIds post.bids.map(&:id)
        json.topBid post.bids.order("bid DESC").first
      end
    end
  end
  @current_user_posts.each do |post|
    json.set! post.id do
      json.id post.id
      json.artistId current_user.id
      json.username current_user.username
      json.avatarThumb current_user.avatar.url(:thumb)
      json.imageOrig post.image.url(:original)
      json.caption post.caption
      json.createdAt post.created_at
      json.commentIds post.comments.map(&:id)
      json.likerIds post.likes.map(&:user_id)
      json.bidIds post.bids.map(&:id)
      json.topBid post.bids.order("bid DESC").first
    end
  end
end



json.comments do
  @followees.each do |followee|
    followee.posts.each do |post|
      post.comments.each do |comment|
        json.set! comment.id do
          json.id comment.id
          json.author comment.author.username
          json.authorId comment.author_id
          json.postId comment.post_id
          json.body comment.body
        end
      end
    end
  end
  @current_user_posts.each do |post|
    post.comments.each do |comment|
      json.set! comment.id do
        json.id comment.id
        json.author comment.author.username
        json.authorId comment.author_id
        json.postId comment.post_id
        json.body comment.body
      end
    end
  end
end
