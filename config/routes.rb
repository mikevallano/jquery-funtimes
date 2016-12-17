Rails.application.routes.draw do


  resources :screenings
  resources :trinkets do
    resources :comments
  end
  resources :dogs
  resources :critters
  devise_for :users, :controllers => {:registrations => "registrations"}

  resources :users, only: [:show], as: :user

  root 'pages#home'
  get 'about', to: 'pages#about', as: :about
  get 'lipsum', to: 'pages#lipsum', as: :lipsum
  get 'paver', to: 'pages#paver', as: :paver
  get 'filter', to: 'pages#filter', as: :filter
  get 'pages/awaiting_confirmation', as: :awaiting_confirmation

end
