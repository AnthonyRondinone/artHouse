# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo = User.create!({name: "Demo", website: "www.art.com", email: "Rondinone.design@gamil.com", bio: "I'm a cool artist", username: "demo", password: "password", avatar: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-23+at+2.07.56+PM.png"})
user1 = User.create!({name: "Anthony Rondinone Artwork", website: "www.art.com", email: "Rondinone.design@gamil.com", bio: "I'm a cool artist, please buy some art!", username: "anthony_rondinone", password: "password", avatar: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-23+at+2.07.56+PM.png"})
user2 = User.create!({name: "Chris Graphics", website: "www.art.com", email: "Chris@gamil.com", bio: "Email or DM me with questions!", username: "chris Graphic", password: "password"})
user3 = User.create!({name: "E.d Photography", website: "www.photo.com", email: "EdPhoto@gamil.com", bio: "Travel and Food photographer", username: "e.d_photography", password: "password", avatar: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-24+at+7.32.30+PM.png"})

Post.destroy_all

post1 = Post.create!({caption: "This is cool! I can't believe how cool this is!", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-23+at+2.07.39+PM.png"})
post2 = Post.create!({caption: "This is cool!", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-23+at+2.07.32+PM.png"})
post3 = Post.create!({caption: "This is cool!", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-23+at+2.07.16+PM.png"})
post4 = Post.create!({caption: "This is cool!", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-23+at+2.07.03+PM.png"})
post5 = Post.create!({caption: "This is cool!", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-23+at+2.06.46+PM.png"})
post6 = Post.create!({caption: "This is cool!", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-23+at+2.06.31+PM.png"})
post7 = Post.create!({caption: "This is cool!", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-23+at+2.06.24+PM.png"})
post8 = Post.create!({caption: "This is cool!", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-23+at+2.05.57+PM.png"})
post9 = Post.create!({caption: "This is cool!", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-23+at+2.05.48+PM.png"})


post10 = Post.create!({caption: "This is cool!", artist_id: user2.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-24+at+7.35.41+PM.png"})
post11 = Post.create!({caption: "This is cool!", artist_id: user2.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-24+at+7.35.21+PM.png"})
post12 = Post.create!({caption: "This is cool!", artist_id: user2.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-24+at+7.35.03+PM.png"})
post13 = Post.create!({caption: "This is cool!", artist_id: user2.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-24+at+7.34.49+PM.png"})
post14 = Post.create!({caption: "This is cool!", artist_id: user2.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-24+at+7.34.43+PM.png"})
post15 = Post.create!({caption: "This is cool!", artist_id: user2.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-24+at+7.34.37+PM.png"})
post16 = Post.create!({caption: "This is cool!", artist_id: user2.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-24+at+7.34.31+PM.png"})
post17 = Post.create!({caption: "This is cool!", artist_id: user2.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-24+at+7.34.16+PM.png"})
post18 = Post.create!({caption: "This is cool!", artist_id: user2.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-24+at+7.34.09+PM.png"})

post19 = Post.create!({caption: "This is cool!", artist_id: user3.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-24+at+7.34.00+PM.png"})
post19 = Post.create!({caption: "This is cool!", artist_id: user3.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-24+at+7.33.54+PM.png"})
post19 = Post.create!({caption: "This is cool!", artist_id: user3.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-24+at+7.33.36+PM.png"})
post19 = Post.create!({caption: "This is cool!", artist_id: user3.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-24+at+7.33.27+PM.png"})
post19 = Post.create!({caption: "This is cool!", artist_id: user3.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-24+at+7.33.20+PM.png"})
post19 = Post.create!({caption: "This is cool!", artist_id: user3.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-24+at+7.33.11+PM.png"})
post19 = Post.create!({caption: "This is cool!", artist_id: user3.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-24+at+7.33.02+PM.png"})
post19 = Post.create!({caption: "This is cool!", artist_id: user3.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-24+at+7.32.51+PM.png"})


Comment.destroy_all

comment1 = Comment.create!({body: "Cool piccc", author_id: user2.id, post_id: post2.id})
comment1 = Comment.create!({body: "comment2", author_id: user3.id, post_id: post2.id})
comment1 = Comment.create!({body: "comment3", author_id: demo.id, post_id: post2.id})
comment1 = Comment.create!({body: "comment4", author_id: user2.id, post_id: post3.id})
