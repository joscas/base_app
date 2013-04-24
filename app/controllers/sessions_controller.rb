class SessionsController < Devise::SessionsController

  def create
    if params[:email] && params[:password]
      resource = resource_from_credentials
    elsif params[:remember_token]
      resource = resource_from_remember_token
    elsif params[:auth_token]
      resource = resource_class.where(authentication_token: params[:auth_token]).first
    else
      return missing_params
    end
    
    return invalid_credentials unless resource

    resource.ensure_authentication_token!
    data = {
      user_id: resource.id,
      auth_token: resource.authentication_token,
    }
    if params[:remember] or params[:remember] == 'true'
      resource.remember_me!
      data[:remember_token] = remember_token(resource)
    end
    render json: data, status: 201
  end

  def destroy
    return missing_params unless params[:auth_token]

    resource = resource_class.where(authentication_token: params[:auth_token]).first
    return invalid_credentials unless resource

    resource.reset_authentication_token!
    render json: {user_id: resource.id}, status: 200
  end

  protected

  def missing_params
    warden.custom_failure!
    return render json: {}, status: 400
  end

  def invalid_credentials
    warden.custom_failure!
    render json: {}, status: 401
  end
  
  def remember_token(resource)
    data = resource_class.serialize_into_cookie(resource)
    "#{data.first.first}-#{data.last}"
  end
  
  def resource_from_remember_token
    token = params[:remember_token]
    id, identifier = token.split('-')
    User.serialize_from_cookie(id, identifier)
  end
  
  def resource_from_credentials
    data = { email: params[:email] }
    if res = User.find_for_database_authentication(data)
      if res.valid_password?(params[:password])
        res
      end
    end
  end

end
