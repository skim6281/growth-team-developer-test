Rails.application.routes.draw do
  root to: "static_pages#root"
  get '/favorites' => "static_pages#favorites"

  resources :gem, param: :name, only: [:show]
end
