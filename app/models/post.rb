class Post < ApplicationRecord

  validates :artist, :image, presence: true

  has_many :comments, dependent: :destroy
  has_many :likes, as: :likable, dependent: :destroy

  belongs_to :artist,
  foreign_key: :artist_id,
  class_name: :User

end
