class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :caption
      t.integer :artist_id, null: false

      t.timestamps
    end
    add_index :posts, :artist_id
  end
end
