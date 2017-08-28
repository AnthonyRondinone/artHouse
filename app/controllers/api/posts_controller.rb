class Api::PostsController < ApplicationController


  def index

    @followees = current_user.followed_artists.includes(posts: [:comments, :likes])
    @current_user_posts = current_user.posts.includes(:comments, :likes)

    render :index

  end

  def create
    @post = Post.new(post_params)
    @post.artist_id = current_user.id

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  private

  def post_params
    params.require(:post).permit(:image, :caption)
  end

end
