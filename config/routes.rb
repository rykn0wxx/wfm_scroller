Rails.application.routes.draw do

  Mercury::Engine.routes
  resources :regions

  resources :messages
  get 'index' => 'home#index', :as => 'index'
  root :to => 'home#index'
end
