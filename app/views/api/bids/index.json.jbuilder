

@user_bids.each do |bid|
  json.set! bid.id do
    json.postId bid.post_id
    json.bid bid.bid
    json.id bid.id
    json.user_id bid.user_id
    json.topBid bid.post.bids.order("bid DESC").first
    json.imageThumb asset_path(bid.post.image.url(:thumb))
    json.avatarThumb asset_path(bid.post.artist.avatar.url(:thumb))
    json.username bid.post.artist.username
    json.createdAt bid.created_at
    json.artistId bid.post.artist_id
  end
end
