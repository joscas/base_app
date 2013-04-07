module AuthHelper
  
  def auth_only!
    unless params[:auth_token] && user_signed_in?
      render json: {}, status: 401
      #redirect_to "/sign_in"
    end
  end
  
  def admin_only!
    unless params[:auth_token] && user_signed_in?
      unless current_user && current_user.admin?
        render json: {}, status: 401
      end
    end
  end
end