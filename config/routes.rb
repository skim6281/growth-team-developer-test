Rails.application.routes.draw do
  root "static_pages#root"
  # get '/favorites' => "static_pages#favorites"

  resources :gem, defaults: { format: :json }, param: :name, only: [:show]
end
