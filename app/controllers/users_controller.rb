class UsersController < AuthController
    actions :index, :show
    before_filter :auth_only!
    
    def index
      render json: User.all
    end
end
