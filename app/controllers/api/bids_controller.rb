class Api::BidsController < ApplicationController



  def index
    latest = current_user.bids.group(:post_id).maximum(:id).values
    @user_bids = current_user.bids.where(id: latest).includes(:post)
  end



  def create

    @bid = Bid.new(bid_params)
    @bid.user_id = current_user.id

    bid_post = @bid.post
    high_bid = bid_post.bids.order("bid DESC").first ? bid_post.bids.order("bid DESC").first.bid.to_f : 0.00

    if @bid.bid.to_f > high_bid
      if @bid.save
        render :show
      else
        render json: @bid.errors.full_messages, status: 422
      end
    else
      render json: ["Invalide bid amount"], status: 422
    end

  end


  private

  def bid_params
    params.require(:bid).permit(:note, :post_id, :user_id, :bid)
  end

end
