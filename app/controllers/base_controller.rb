class BaseController < ApplicationController
  inherit_resources
  respond_to :json
  before_filter :default_json
  
  protected
  
  def default_json
    request.format = :json if params[:format].nil?
  end
end
