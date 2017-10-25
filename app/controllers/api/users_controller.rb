class Api::UsersController < ApplicationController


  def index
    @suggested_users = User.suggeted_top_three
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      @followers = @user.followers
      @followed_artists = @user.followed_artists
      @user_posts = @user.posts.includes(:comments, :likes, :bids)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  def update
    @user = User.find(params[:id])
    @user_posts = @user.posts.includes(:comments, :likes, :bids)
    @followers = @user.followers
    @followed_artists = @user.followed_artists
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end



  def show
    @user = User.find(params[:id])
    @followers = @user.followers
    @followed_artists = @user.followed_artists
    @user_posts = @user.posts.includes(:comments, :likes, :bids)
    render :show
  end




  private

  def user_params
    params.require(:user).permit(:username, :password, :name, :website, :bio, :email, :avatar)
  end


end
