# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'static_pages#root'

  devise_for :users, controllers: {
    omniauth_callbacks: 'users/omniauth_callbacks'
  }

  devise_scope :user do
    post 'users/auth/verify', to: 'users/sessions#verify'
  end

  resources 'goals', only: [:index]
  resources 'coaches', only: %i[index show]
  resources 'coachings', only: %i[index show create update]
  resources 'messages', only: %i[index show create update]

  mount ActionCable.server => '/cable'
end
