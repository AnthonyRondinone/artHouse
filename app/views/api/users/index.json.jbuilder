json.user do
  @suggested_users.each do |user|
    json.set! user.id do
      json.id user.id
      json.username user.username
      json.avatar_url asset_path(user.avatar.url)
      json.postIds user.posts.map(&:id)
      json.followerIds user.followers.map(&:id)
      json.followeeIds user.followed_artists.map(&:id)
    end
  end
end

@suggested_users.each do |user|
  user.posts.each do |post|
    json.posts do
      json.set! post.id do
        json.image_url asset_path(post.image.url)
        json.id post.id
      end
    end
  end
end
