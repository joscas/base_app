class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :admin
end
