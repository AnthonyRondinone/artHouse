class CreateBids < ActiveRecord::Migration[5.1]
  def change
    create_table :bids do |t|

      t.timestamps
    end
  end
end
