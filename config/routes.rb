Rails.application.routes.draw do


  resources :trinkets
  resources :critters
  devise_for :users, :controllers => {:registrations => "registrations"}

  resources :users, only: [:show], as: :user

  root 'pages#home'
  get 'about', to: 'pages#about', as: :about
  get 'lipsum', to: 'pages#lipsum', as: :lipsum
  get 'pages/awaiting_confirmation', as: :awaiting_confirmation

end
