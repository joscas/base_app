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
	    redirect_to "/?auth_token=#{@user.authentication_token}/#/callback"
    else
      redirect_to "/err_500"
    end
  end
end