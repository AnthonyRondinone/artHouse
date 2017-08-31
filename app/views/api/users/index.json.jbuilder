@suggested_users.each do |user|
  json.set! user.id do
    json.id user.id
    json.username user.username
    json.avatar_url asset_path(user.avatar.url)
    json.followerIds user.followers.map(&:id)
    json.followeeIds user.followed_artists.map(&:id)
  end
end
