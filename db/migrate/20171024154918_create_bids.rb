class CreateBids < ActiveRecord::Migration[5.1]
  def change
    create_table :bids do |t|
      t.decimal :bid, null: false, scale: 2, precision: 10
      t.integer :user_id, null: false
      t.integer :post_id, null: false
      t.string :note

      t.timestamps
    end
  end
end
