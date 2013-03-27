class UsersController < AuthController
    actions :index, :show
    before_filter :admin_only!, only: [:index]
    before_filter :auth_only!, except: [:index]
    
    def index
      render json: User.all
    end
end
