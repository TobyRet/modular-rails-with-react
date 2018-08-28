require_dependency "todo/application_controller"

module Todo
  module Api
    class TasksController < ApplicationController

      def index
        @tasks = Task.all

        render json: @tasks
      end
    end
  end
end
