Rails.application.routes.draw do
  mount Todo::Engine => '/', as: 'todo'
end
