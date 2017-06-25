Rails.application.routes.draw do
  get 'index' => 'home#index', :as => 'index'
  root :to => 'home#index'
end
