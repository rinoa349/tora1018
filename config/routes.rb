Rails.application.routes.draw do
  root 'inquirys#index'
  get 'inquirys/menu1'
  get 'inquirys/appointment'
  get 'inquirys/access'
  get 'inquirys/information'
end
