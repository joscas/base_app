class UsersController < ApplicationController
  respond_to :json
  before_filter :admin_only!, only: [:index]
  before_filter :auth_only!, except: [:index]
  
  def index
    render json: User.all
  end
  
  def show
    render json: current_user
  end
end
