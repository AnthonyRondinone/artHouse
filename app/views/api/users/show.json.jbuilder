# json.extract! @user, :id, :username


json.user do
  json.extract! @user, :id, :username, :name, :website, :bio, :email
  json.avatarOrig asset_path(@user.avatar.url(:original))
  json.postIds @user.posts.map(&:id)
  json.followerIds @followers.map(&:id)
  json.followeeIds @followed_artists.map(&:id)
end


json.posts do
  @user_posts.each do |post|
    json.set! post.id do
      json.imageThumb asset_path(post.image.url(:thumb))
      json.id post.id
      json.commentCount post.comments.count
      json.likerIds post.likes.map(&:user_id)
    end
  end
end
