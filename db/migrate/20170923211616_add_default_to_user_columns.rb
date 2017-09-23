class AddDefaultToUserColumns < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :name, :string, default: ""
    change_column :users, :bio, :text, default: ""
    change_column :users, :email, :string, default: ""
  end
end
