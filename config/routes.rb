Rails.application.routes.draw do
  root 'inquirys#index'
  get 'inquirys/menu'
  get 'inquirys/appointment'
  get 'inquirys/access'
  get 'inquirys/menu_display'
end
