class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      log_in(@user)
      @user_posts = @user.posts.includes(:comments, :likes, :bids)
      @followers = @user.followers
      @followed_artists = @user.followed_artists
      render 'api/users/show'
    else
      render json: ["Sorry, please double-check your username or password."], status: 422

    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: "{}"
    else
      render json: ["No user logged in"], status: 404
    end
  end

end
