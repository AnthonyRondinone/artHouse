class User < ApplicationRecord

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :bio, length: { maximum: 150 }

  has_attached_file :avatar, styles: { original: "155x155#", thumb: "45x45#" }, default_url: "https://s3.amazonaws.com/arthouse-dev/default-user.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  attr_reader :password

  has_many :likes

  has_many :bids, dependent: :destroy

  has_many :posts,
  primary_key: :id,
  foreign_key: :artist_id,
  dependent: :destroy

  has_many :comments,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :Comment,
  dependent: :destroy

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

  def self.suggeted_top_three
    request = <<-SQL
    SELECT users.*, COUNT(follower_id)
    FROM users
    JOIN follows ON users.id = follows.followee_id
    GROUP BY users.id
    ORDER BY COUNT(follower_id) DESC
    LIMIT 3
    SQL
    User.find_by_sql(request)
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
