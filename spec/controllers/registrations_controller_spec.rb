require 'spec_helper'

describe RegistrationsController do
  before(:each) do
    @request.env["devise.mapping"] = Devise.mappings[:user]
  end

  describe 'POST create' do
    context 'registration error' do
      before { post :create, :user => {} } 
      it 'returns http 422' do
       response.response_code.should == 422
      end
    end
    context 'registration success' do
      before do
        user = Fabricate.attributes_for(:user)
        user[:password_confirmation] = user[:password]
        xhr :post, :create, :user => user
      end
      it 'returns http 201' do
        response.response_code.should == 201
      end
    end
  end

  describe 'PUT update' do
    context 'Invalid credentials' do
      before do
        user = Fabricate(:user)
        user.ensure_authentication_token!
        xhr :put, :update, :id => user.id, :user => {:name => "NoToken NewName"}
      end
      it 'returns http 401' do
        response.response_code.should == 401
      end
    end
    context 'Update password' do
      before do
        @user = Fabricate(:user)
        @user.ensure_authentication_token!
        xhr :put,
            :update,
            :id => @user.id,
            :auth_token => @user.authentication_token,
            :user => {:current_password => @user.password,
                      :password => "abcdefgh",
                      :password_confirmation => "abcdefgh"}
      end
      it 'returns http 201' do
        response.response_code.should == 201
      end
      it 'returns updated user' do
        up_user = JSON.parse(response.body)['user']
        expect_user = {'id' => @user.id.to_s, # id is a MongoDB BSON ObjectID
                           'name' => @user.name,
                           'email' => @user.email,
                           'admin' => @user.admin}
        up_user.should == expect_user
      end
    end
    context 'Update fields' do
      before do
        @user = Fabricate(:user)
        @user.ensure_authentication_token!
        xhr :put,
            :update,
            :id => @user.id,
            :auth_token => @user.authentication_token,
            :user => {:current_password => @user.password,
                      :name => "New Name"}
      end
      it 'returns http 201' do
        response.response_code.should == 201
      end
      it 'returns updated user' do
        up_user = JSON.parse(response.body)['user']
        expect_user = {'id' => @user.id.to_s, # id is a MongoDB BSON ObjectID
                           'name' => "New Name",
                           'email' => @user.email,
                           'admin' => @user.admin}
        up_user.should == expect_user
      end
    end
    context 'Invalid credentials' do
      before do
        @user = Fabricate(:user)
        @user.ensure_authentication_token!
        xhr :put,
            :update,
            :id => @user.id,
            :auth_token => "qM42ynXmGRrV3tiBL9k7", # Invalid token
            :user => {:current_password => @user.password,
                      :name => "New Name"}
      end
      it 'returns http 401' do
        response.response_code.should == 401
      end
    end
    context 'No current password' do
      before do
        @user = Fabricate(:user)
        @user.ensure_authentication_token!
        xhr :put,
            :update,
            :id => @user.id,
            :auth_token => @user.authentication_token,
            :user => {:current_password => 'wrongPassword',
                      :name => "New Name"}
      end
      it 'returns http 422' do
        response.response_code.should == 422
      end
    end
  end
end