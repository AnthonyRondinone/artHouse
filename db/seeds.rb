# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create!({name: "Anthony Rondinone Artwork", website: "www.art.com", email: "Rondinone.design@gamil.com", bio: "Custom art work and album design", username: "anthony_rondinone", password: "password", avatar: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-23+at+2.07.56+PM.png"})
user2 = User.create!({name: "Chris Graphics", website: "www.art.com", email: "Chris@gamil.com", bio: "💵 Email or DM me with questions!", username: "chris Graphic", password: "password", avatar: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-23+at+2.07.56+PM.png"})
user3 = User.create!({name: "E.d Photography", website: "www.photo.com", email: "EdPhoto@gamil.com", bio: "Travel and Food photographer", username: "e.d_photography", password: "password", avatar: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-24+at+7.32.30+PM.png"})
user4 = User.create!({name: "Adam", website: "www.paint.com", email: "EdPhoto@gamil.com", bio: "🌅 Love to Create", username: "adam_G", password: "password", avatar: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-24+at+7.32.30+PM.png"})
user5 = User.create!({name: "Kate", website: "www.brush.com", email: "EdPhoto@gamil.com", bio: "Abstract and contemporary", username: "krschreidt", password: "password", avatar: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-24+at+7.32.30+PM.png"})

Post.destroy_all

post1 = Post.create!({caption: "For sale, DM with any questions", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/Anthony/Screen+Shot+2017-08-23+at+2.05.48+PM.png"})
post2 = Post.create!({caption: "This is how I feel right now", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/Anthony/Screen+Shot+2017-08-23+at+2.05.57+PM.png"})
post3 = Post.create!({caption: "Making up titles is fun", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/Anthony/Screen+Shot+2017-08-23+at+2.06.24+PM.png"})
post4 = Post.create!({caption: "Where are you right now?", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/Anthony/Screen+Shot+2017-08-23+at+2.06.31+PM.png"})
post5 = Post.create!({caption: "Pulk Pull revolving doors", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/Anthony/Screen+Shot+2017-08-23+at+2.07.39+PM.png"})
post6 = Post.create!({caption: "Everything's in it's right place", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/Anthony/Screen+Shot+2017-08-24+at+7.33.02+PM.png"})
post7 = Post.create!({caption: "No where man", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/Anthony/Screen+Shot+2017-08-24+at+7.33.11+PM.png"})
post8 = Post.create!({caption: "Where you end and I begin", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/Anthony/Screen+Shot+2017-08-24+at+7.33.20+PM.png"})
post9 = Post.create!({caption: "All that is and ever was", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/Anthony/Screen+Shot+2017-08-24+at+7.34.09+PM.png"})
post10 = Post.create!({caption: "This is it", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/Anthony/Screen+Shot+2017-08-24+at+7.34.16+PM.png"})
post11 = Post.create!({caption: "Same place as last time", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/Anthony/Screen+Shot+2017-08-24+at+7.34.31+PM.png"})
post12 = Post.create!({caption: "Towel is in", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/Anthony/Screen+Shot+2017-08-24+at+7.34.37+PM.png"})
post13 = Post.create!({caption: "Punch up at a wedding", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/Anthony/Screen+Shot+2017-08-24+at+7.35.03+PM.png"})
post14 = Post.create!({caption: "Standing here", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/Anthony/Screen+Shot+2017-08-24+at+7.35.21+PM.png"})
post15 = Post.create!({caption: "Where the water takes a bow", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/Anthony/Screen+Shot+2017-08-24+at+7.35.41+PM.png"})


post16 = Post.create!({caption: "Your future", artist_id: user2.id, image: "https://s3.amazonaws.com/arthouse-dev/adamG/Screen+Shot+2017-08-29+at+10.11.25+PM.png"})
post17 = Post.create!({caption: "You are an angel heading for a land of sunshine", artist_id: user2.id, image: "https://s3.amazonaws.com/arthouse-dev/adamG/Screen+Shot+2017-08-29+at+10.11.36+PM.png"})
post18 = Post.create!({caption: "And fortune is smiling upon you", artist_id: user2.id, image: "https://s3.amazonaws.com/arthouse-dev/adamG/Screen+Shot+2017-08-29+at+10.11.44+PM.png"})
post19 = Post.create!({caption: "From fasting to feasting", artist_id: user2.id, image: "https://s3.amazonaws.com/arthouse-dev/adamG/Screen+Shot+2017-08-29+at+10.11.59+PM.png"})
post20 = Post.create!({caption: "Cause everything is not yet lost...", artist_id: user2.id, image: "https://s3.amazonaws.com/arthouse-dev/adamG/Screen+Shot+2017-08-29+at+10.12.07+PM.png"})
post21 = Post.create!({caption: "Here's how to order!", artist_id: user2.id, image: "https://s3.amazonaws.com/arthouse-dev/adamG/Screen+Shot+2017-08-29+at+10.12.14+PM.png"})
post22 = Post.create!({caption: "Does life seem worthwhile", artist_id: user2.id, image: "https://s3.amazonaws.com/arthouse-dev/adamG/Screen+Shot+2017-08-29+at+10.12.24+PM.png"})
post23 = Post.create!({caption: "Varicose", artist_id: user2.id, image: "https://s3.amazonaws.com/arthouse-dev/adamG/Screen+Shot+2017-08-29+at+10.13.12+PM.png"})
post24 = Post.create!({caption: "Comatose", artist_id: user2.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-24+at+7.34.09+PM.png"})


post25 = Post.create!({caption: "Pour shame all over us", artist_id: user3.id, image: "https://s3.amazonaws.com/arthouse-dev/chris/Screen+Shot+2017-08-29+at+10.10.45+PM.png"})
post26 = Post.create!({caption: "ALMOST", artist_id: user3.id, image: "https://s3.amazonaws.com/arthouse-dev/chris/Screen+Shot+2017-08-29+at+10.10.53+PM.png"})
post27 = Post.create!({caption: "The world expects the pose", artist_id: user3.id, image: "https://s3.amazonaws.com/arthouse-dev/chris/Screen+Shot+2017-08-29+at+10.11.06+PM.png"})
post28 = Post.create!({caption: "loosen up", artist_id: user3.id, image: "https://s3.amazonaws.com/arthouse-dev/chris/Screen+Shot+2017-08-29+at+10.12.31+PM.png"})
post29 = Post.create!({caption: "sweet talk, CAFFEINE", artist_id: user3.id, image: "https://s3.amazonaws.com/arthouse-dev/chris/Screen+Shot+2017-08-29+at+10.12.38+PM.png"})
post30 = Post.create!({caption: "But it's so easy for you", artist_id: user3.id, image: "https://s3.amazonaws.com/arthouse-dev/chris/Screen+Shot+2017-08-29+at+10.12.47+PM.png"})
post31 = Post.create!({caption: "Believe anything anyone", artist_id: user3.id, image: "https://s3.amazonaws.com/arthouse-dev/chris/Screen+Shot+2017-08-29+at+10.13.00+PM.png"})
post32 = Post.create!({caption: "not funny any more", artist_id: user3.id, image: "https://s3.amazonaws.com/arthouse-dev/chris/Screen+Shot+2017-08-29+at+10.13.06+PM.png"})
post33 = Post.create!({caption: "Like pockets jingling", artist_id: user3.id, image: "https://s3.amazonaws.com/arthouse-dev/chris/Screen+Shot+2017-08-29+at+10.13.25+PM.png"})
post34 = Post.create!({caption: "But without me", artist_id: user3.id, image: "https://s3.amazonaws.com/arthouse-dev/chris/Screen+Shot+2017-08-29+at+10.13.31+PM.png"})
post35 = Post.create!({caption: "Sense of security", artist_id: user3.id, image: "https://s3.amazonaws.com/arthouse-dev/chris/Screen+Shot+2017-08-29+at+10.13.37+PM.png"})
post36 = Post.create!({caption: "A little discipline", artist_id: user3.id, image: "https://s3.amazonaws.com/arthouse-dev/chris/Screen+Shot+2017-08-29+at+10.13.43+PM.png"})
post37 = Post.create!({caption: "A donor by habit", artist_id: user3.id, image: "https://s3.amazonaws.com/arthouse-dev/chris/Screen+Shot+2017-08-29+at+10.13.51+PM.png"})
post38 = Post.create!({caption: "Holding blunt instrument", artist_id: user3.id, image: "https://s3.amazonaws.com/arthouse-dev/chris/Screen+Shot+2017-08-29+at+10.13.59+PM.png"})
post39 = Post.create!({caption: "Toss me inside a Hefty", artist_id: user3.id, image: "https://s3.amazonaws.com/arthouse-dev/chris/Screen+Shot+2017-08-29+at+10.14.17+PM.png"})
post40 = Post.create!({caption: "Everybody's starin", artist_id: user3.id, image: "https://s3.amazonaws.com/arthouse-dev/chris/Screen+Shot+2017-08-29+at+10.14.27+PM.png"})
post41 = Post.create!({caption: "Where are the kids?", artist_id: user3.id, image: "https://s3.amazonaws.com/arthouse-dev/chris/Screen+Shot+2017-08-29+at+10.14.34+PM.png"})


post42 = Post.create!({caption: "This is cool!", artist_id: user4.id, image: "https://s3.amazonaws.com/arthouse-dev/ed_photography/Screen+Shot+2017-08-29+at+10.06.20+PM.png"})
post43 = Post.create!({caption: "This is cool!", artist_id: user4.id, image: "https://s3.amazonaws.com/arthouse-dev/ed_photography/Screen+Shot+2017-08-29+at+10.06.33+PM.png"})
post44 = Post.create!({caption: "This is cool!", artist_id: user4.id, image: "https://s3.amazonaws.com/arthouse-dev/ed_photography/Screen+Shot+2017-08-29+at+10.06.42+PM.png"})
post45 = Post.create!({caption: "This is cool!", artist_id: user4.id, image: "https://s3.amazonaws.com/arthouse-dev/ed_photography/Screen+Shot+2017-08-29+at+10.07.03+PM.png"})
post46 = Post.create!({caption: "This is cool!", artist_id: user4.id, image: "https://s3.amazonaws.com/arthouse-dev/ed_photography/Screen+Shot+2017-08-29+at+10.07.15+PM.png"})
post47 = Post.create!({caption: "This is cool!", artist_id: user4.id, image: "https://s3.amazonaws.com/arthouse-dev/ed_photography/Screen+Shot+2017-08-29+at+10.07.22+PM.png"})
post48 = Post.create!({caption: "This is cool!", artist_id: user4.id, image: "https://s3.amazonaws.com/arthouse-dev/ed_photography/Screen+Shot+2017-08-29+at+10.07.36+PM.png"})
post49 = Post.create!({caption: "This is cool!", artist_id: user4.id, image: "https://s3.amazonaws.com/arthouse-dev/ed_photography/Screen+Shot+2017-08-29+at+10.08.05+PM.png"})
post50 = Post.create!({caption: "This is cool!", artist_id: user4.id, image: "https://s3.amazonaws.com/arthouse-dev/ed_photography/Screen+Shot+2017-08-29+at+10.08.34+PM.png"})
post51 = Post.create!({caption: "This is cool!", artist_id: user4.id, image: "https://s3.amazonaws.com/arthouse-dev/ed_photography/Screen+Shot+2017-08-29+at+10.08.42+PM.png"})
post52 = Post.create!({caption: "This is cool!", artist_id: user4.id, image: "https://s3.amazonaws.com/arthouse-dev/ed_photography/Screen+Shot+2017-08-29+at+10.08.50+PM.png"})
post53 = Post.create!({caption: "This is cool!", artist_id: user4.id, image: "https://s3.amazonaws.com/arthouse-dev/ed_photography/Screen+Shot+2017-08-29+at+10.08.58+PM.png"})







Comment.destroy_all

comment1 = Comment.create!({body: "Cool piccc", author_id: user2.id, post_id: post2.id})
comment1 = Comment.create!({body: "comment2", author_id: user3.id, post_id: post2.id})
comment1 = Comment.create!({body: "comment3", author_id: demo.id, post_id: post2.id})
comment1 = Comment.create!({body: "comment4", author_id: user2.id, post_id: post3.id})
