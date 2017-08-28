class Api::CommentsController < ApplicationController


  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id

    if @comment.save
      render '/api/posts'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end






  private

  def comment_params
    params.require(:comment).permit(:body, :post_id, :author_id)
  end


end
