class Comment < ApplicationRecord

  validates :body, :author, :post, presence: true

  has_many :likes, as: :likable, dependent: :destroy

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :post

end
