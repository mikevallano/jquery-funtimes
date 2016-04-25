Rails.application.routes.draw do


  devise_for :users

  resources :users, only: [:show], as: :user

  root 'pages#home'
  get 'pages/about'

end
