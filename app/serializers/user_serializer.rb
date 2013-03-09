class UserSerializer < ActiveModel::Serializer
  attributes :id
  
  def id
    object._id
  end
end
