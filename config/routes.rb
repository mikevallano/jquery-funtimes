Rails.application.routes.draw do


  devise_for :users, :controllers => {:registrations => "registrations"}

  resources :users, only: [:show], as: :user

  root 'pages#home'
  get 'about', to: 'pages#about', as: :about
  get 'pages/awaiting_confirmation', as: :awaiting_confirmation

end
