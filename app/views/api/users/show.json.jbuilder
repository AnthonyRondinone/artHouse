
json.user do
  json.extract! @user, :id, :username, :name, :website, :bio, :email
  json.avatar_url asset_path(@user.avatar.url)
  json.postIds @user.posts.map
end

json.posts do
  []
end
