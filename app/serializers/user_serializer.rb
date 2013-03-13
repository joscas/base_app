class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  
  def id
    object._id
  end
end
