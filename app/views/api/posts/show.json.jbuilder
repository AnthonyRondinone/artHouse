


json.post do
  json.extract! @post, :id, :username, :name, :website, :bio, :email
  json.avatar_url asset_path(@user.avatar.url)
  json.postIds @user.posts.map(&:id)
  json.followerIds @user.followers.map(&:id)
  json.followeeIds @user.followed_artists.map(&:id)

end
