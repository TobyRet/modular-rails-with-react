Todo::Engine.routes.draw do
  namespace :api do
    resources :tasks
    root 'tasks#index'
  end
end
