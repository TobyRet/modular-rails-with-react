Allocation::Engine.routes.draw do
  namespace :api do
    resources :offenders
    root 'offenders#index'
  end
end
