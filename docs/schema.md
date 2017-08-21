```js
class Tables < ActiveRecord::Migration[5.1]

# USERS TABLES

  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.string :profile_img
      t.string :name
      t.string :website
      t.text :bio # max length 150 char
      t.string :email

      t.timestamps
    end
    add_index :users, :username, unique: true
  end

# POSTS TABLE

  def change
    create_table :posts do |t|
      t.string :url, null: false
      t.string :caption
      t.integer :artist_id, null: false


      t.timestamps
    end
    add_index :posts, :artist_id
  end


  # COMMENTS TABLE

  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :post_id, null: false
      t.string :body, null: false


      t.timestamps
    end
    add_index :comments, :user_id
    add_index :comments, :post_id
  end

  # LIKES JOIN TABLE

  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :likeable_id, null: false
      t.string :like_type, null: false

      t.timestamps
    end
    add_index :likes, [:user_id, :likeable_id], unique: true
  end


  # FOLLOWS JOIN TABLE

  def change
    create_table :follows do |t|
      t.integer :follower_id, null: false
      t.integer :followee_id, null: false



      t.timestamps
    end
    add_index :follows, :follower_id
    add_index :follows, :followee_id
    add_index :follows, [:follower_id, :followee_id], unique: true
  end



end

```
