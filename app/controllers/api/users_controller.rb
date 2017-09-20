class Api::UsersController < ApplicationController


  def index
    @suggested_users = User.suggeted_top_three
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  def update
    @user = current_user
    if @user.update(user_params)
      debugger
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end



  def show
    @user = User.find(params[:id])
    render :show
  end




  private

  def user_params
    params.require(:user).permit(:username, :password, :name, :website, :bio, :email, :avatar_url)
  end


end
