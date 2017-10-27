Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, except: [:new, :edit]
    resource :session, only: [:create, :destroy, :update]
    resources :posts, except: [:new, :edit]
    resources :follows, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy, :show]
    resources :comments, only: [:create, :destroy, :index]
    resources :bids, only: [:create, :show, :index]
  end


  root to: "static_pages#root"


end
