
# json.posts @followees do |followee|
#   json.id followee.id
#
# end

# json.posts do
#   @followees.each do |followee|
#     json.set! followee.id do
#       json.username followee.username
#     end
#   end
# end


json.posts do
  @followees.each do |followee|
    followee.posts.each do |post|
      json.set! post.id do
        json.artistId followee.id
        json.username followee.username
        json.avatar followee.avatar
        json.image post.image
        json.createdAt post.created_at
        json.commentIds post.comments.map(&:id)
        json.likeIds post.likes.map(&:id)
        json.liked post.liked_by_current_user
      end
    end
  end
  @current_user_posts.each do |post|
    json.set! post.id do
      json.artistId current_user.id
      json.username current_user.username
      json.avatar current_user.avatar
      json.image post.image
      json.createdAt post.created_at
      json.commentIds post.comments.map(&:id)
      json.likeIds post.likes.map(&:id)
      json.liked post.liked_by_current_user
    end
  end
end
