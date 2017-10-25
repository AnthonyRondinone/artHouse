class Api::BidsController < ApplicationController

  def create
    @bid = Bid.new(bid_params)
    @bid.user_id = current_user.id

    if @bid.save
      render :show
    else
      render json: @bid.errors.full_messages, status: 422
    end
  end


  private

  def bid_params
    params.require(:bid).permit(:note, :post_id, :user_id, :bid)
  end

end
