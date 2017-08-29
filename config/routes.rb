Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, except: [:new, :edit]
    resource :session, only: [:create, :destroy, :update]
    resources :posts, except: [:new, :edit]
    resources :follows, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy, :index, :show]
  end


  root to: "static_pages#root"


end
