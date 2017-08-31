json.extract! @user, :id, :username
json.followeeIds @user.followed_artists.map(&:id)
