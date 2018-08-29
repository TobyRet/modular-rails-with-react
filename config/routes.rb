Rails.application.routes.draw do
  mount Todo::Engine => '/', as: 'todo'
  mount Allocation::Engine => '/', as: 'allocation'
end
