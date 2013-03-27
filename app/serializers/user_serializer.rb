class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :admin
  
  def id
    object._id
  end
end
