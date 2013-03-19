class RegistrationsController < Devise::RegistrationsController
  def create
    build_resource
    if resource.save
      sign_up(resource_name, resource)
      render json: resource, status: 201
      return
    else
      render json: { :errors => @user.errors.full_messages[0] }, status: 422
      return
    end    
  end
end
