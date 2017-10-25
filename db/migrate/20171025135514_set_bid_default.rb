class SetBidDefault < ActiveRecord::Migration[5.1]
  def change
    change_column_default(:bids, :bid, 0.00)
  end
end
