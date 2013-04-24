class RegistrationsController < Devise::RegistrationsController
  respond_to :json
  
  def create
    # TODO: fixme
    # This is needed to get rid of the mass security error on this field.
    # It is a part of the ember data model, but I'm not sure how to remove
    # it from the JSON request when we're not doing the update.
    resource_params.delete(:current_password)

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
  
  def update
    resource = resource_class.find(params[:id])
    if resource.update_with_password(resource_params)
      render json: resource, status: 201
      return
    else
      clean_up_passwords resource
      render json: { :errors => resource.errors.full_messages[0] }, status: 422
      return
    end
  end  
end
