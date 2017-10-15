Rails.application.routes.draw do


  resources :vendors
  resources :products
  resources :collars
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
  get 'gimmie_crits', to: 'pages#gimmie_crits', as: :gimmie_crits
  get 'image_uploader', to: 'pages#image_uploader', as: :image_uploader
  post 'upload_image', to: 'pages#upload_image', as: :upload_image
  get 'image_exists', to: 'pages#image_exists', as: :image_exists
  get 'pages/awaiting_confirmation', as: :awaiting_confirmation

end
