Before do
  User.create! :name => 'Admin User',
               :email => 'admin@example.com',
               :password => '12345678',
               :password_confirmation => '12345678',
               :admin => true
end