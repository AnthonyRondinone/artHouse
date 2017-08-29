class Api::FollowsController < ApplicationController


  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id
    debugger
    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = User.find(params[:id])
    debugger
    @follow = current_user.followed.find_by(followee_id: params[:id])
    if @follow.destroy
      render :show
    end
  end



  private

  def follow_params
    params.require(:follow).permit(:followee_id)


  end

end
