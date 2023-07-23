Rails.application.routes.draw do
  root to: 'inquirys#index'
  get 'inquirys/menu'
  get 'inquirys/appointment'
  get 'inquirys/access'
  get 'inquirys/information'
end
