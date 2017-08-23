class User < ApplicationRecord

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :bio, length: { maximum: 150 }

  has_attached_file :avatar, default_url: "defaultAvatar.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  attr_reader :password

  has_many :posts, dependent: :destroy
  has_many :comments, dependent: :destroy

  has_many :post_comments,
    through: :posts

  has_many :followed,
  foreign_key: :follower_id,
  class_name: :Follow

  has_many :followed_artists, # <=
  through: :followed,
  source: :followee

  has_many :users_following,
  foreign_key: :followee_id,
  class_name: :Follow

  has_many :followers,    # <=
  through: :users_following,
  source: :follower

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

end
