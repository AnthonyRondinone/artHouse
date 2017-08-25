Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, except: [:new, :edit]
    resource :session, only: [:create, :destroy, :update]
    resources :posts, except: [:new, :edit]
  end


  root to: "static_pages#root"


end
