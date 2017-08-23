# json.extract! @user, :id, :username


json.user do
  json.extract! @user, :id, :username, :name, :website, :bio, :email
  json.avatar_url asset_path(@user.avatar.url)
  json.postIds @user.posts.map(&:id)
end

json.posts(@user.posts) do |post|
  json.image_url asset_path(post.image.url)
end

#
# https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-23+at+2.07.56+PM.png
# http://s3.amazonaws.com/arthouse-dev/users/avatars/000/000/019/original/Screen_Shot_2017-08-23_at_2.07.56_PM.png?1503516788
