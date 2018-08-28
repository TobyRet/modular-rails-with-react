class CreateTodoTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :todo_tasks do |t|
      t.string :title
      t.text :content

      t.timestamps
    end
  end
end
