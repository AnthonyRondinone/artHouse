class Post < ApplicationRecord

  validates :artist, :image, presence: true

  has_many :comments, dependent: :destroy

  has_many :likes, dependent: :destroy

  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :artist,
  primary_key: :id,
  foreign_key: :artist_id,
  class_name: :User

end
