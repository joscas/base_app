class OmniauthCallbacksController < Devise::OmniauthCallbacksController
	def google_oauth2
	  generic_provider
	end
	
	def linkedin
	  generic_provider
  end
  
  def generic_provider
    @user = User.find_for_generic_provider(request.env["omniauth.auth"], current_user)

    if !@user.nil? && @user.persisted?
      @user.ensure_authentication_token!
      # Change this redirect if browser history enabled
      #redirect_to "/callback?auth[auth_token]=#{@user.authentication_token}&auth[remember]=true"
	    redirect_to "/?auth[auth_token]=#{@user.authentication_token}&auth[remember]=true/#/callback"
    else
      redirect_to "/err_500"
    end
  end
end