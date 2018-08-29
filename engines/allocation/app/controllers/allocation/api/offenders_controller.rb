require_dependency "allocation/application_controller"

module Allocation
  module Api
    class OffendersController < ApplicationController
      def index
        @offenders = Offender.all

        render json: @offenders
      end
    end
  end
end
