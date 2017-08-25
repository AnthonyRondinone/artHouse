class Add < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :liked_by_current_user, :boolean, default: false
  end
end
