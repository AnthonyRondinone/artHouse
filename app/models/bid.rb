class Bid < ApplicationRecord

  validates :bid, :user, :post, presence: true

  belongs_to :user
  belongs_to :post

end
