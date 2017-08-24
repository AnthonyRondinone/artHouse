# json.extract! @user, :id, :username


json.user do
  json.extract! @user, :id, :username, :name, :website, :bio, :email
  json.avatar_url asset_path(@user.avatar.url)
  json.postIds @user.posts.map(&:id)
  json.followerIds @user.followers.map(&:id)
  json.followeeIds @user.followed_artists.map(&:id)

end

json.posts(@user.posts) do |post|
  json.image_url asset_path(post.image.url)
end
