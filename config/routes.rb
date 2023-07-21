Rails.application.routes.draw do
  root to: 'inquirys#index'
  get 'inquirys/menu'
end
