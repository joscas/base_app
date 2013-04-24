class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :token_authenticatable, :omniauthable,
         :omniauth_providers => [:google_oauth2, :linkedin]

  # Setup accessible (or protected) attributes for your model
  attr_accessible :name, :email, :password, :password_confirmation, :remember_me, :admin
  # TODO: hack. This field needs to be part of the ember data model for updates, but
  # we generally don't want it for controller actions
  # attr_accessible :title, :body

  def self.find_for_generic_provider(access_token, signed_in_resource=nil)
    if access_token.respond_to?(:info)
      data = access_token.info
    else
      return nil
    end
    user = User.where(:email => data["email"]).first
    unless user
      user = User.create(name: data["name"],
                         email: data["email"],
                         password: Devise.friendly_token[0,20])
    end
    user
  end
end
