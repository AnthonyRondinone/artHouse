class Bid < ApplicationRecord

  validates :user, :post, presence: true

  belongs_to :user
  belongs_to :post

end
