# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo = User.create({name: "Demo", website: "www.art.com", email: "Rondinone.design@gamil.com", bio: "I'm a cool artist", username: "demo", password: "password", avatar: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-23+at+2.07.56+PM.png"})
user1 = User.create({name: "Anthony Rondinone Artwork", website: "www.art.com", email: "Rondinone.design@gamil.com", bio: "I'm a cool artist", username: "Anthony_Rondinone", password: "password", avatar: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-23+at+2.07.56+PM.png"})

Post.destroy_all

post1 = Post.create({caption: "This is cool!", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-23+at+2.07.39+PM.png"})
post1 = Post.create({caption: "This is cool!", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-23+at+2.07.32+PM.png"})
post1 = Post.create({caption: "This is cool!", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-23+at+2.07.16+PM.png"})
post1 = Post.create({caption: "This is cool!", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-23+at+2.07.03+PM.png"})
post1 = Post.create({caption: "This is cool!", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-23+at+2.06.46+PM.png"})
post1 = Post.create({caption: "This is cool!", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-23+at+2.06.31+PM.png"})
post1 = Post.create({caption: "This is cool!", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-23+at+2.06.24+PM.png"})
post1 = Post.create({caption: "This is cool!", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-23+at+2.05.57+PM.png"})
post1 = Post.create({caption: "This is cool!", artist_id: user1.id, image: "https://s3.amazonaws.com/arthouse-dev/seed+photos/Screen+Shot+2017-08-23+at+2.05.48+PM.png"})
