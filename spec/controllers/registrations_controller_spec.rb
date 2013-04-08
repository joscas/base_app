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
        post :create, :user => user
      end
      it 'returns http 201' do
        response.response_code.should == 201
      end
    end
  end

  # describe 'PUT update' do
  #   context 'Invalid credentials' do
  #     before do
  #       user = Fabricate(:user)
  #       user.ensure_authentication_token!
  #       put :update, :id => user.id, :user => {:name => "NoToken NewName"}
  #     end
  #     it 'returns http 401' do
  #       response.response_code.should == 401
  #     end
  #   end
  #   context 'Update with password' do
  #     
  #   end
  #   context 'Update without password' do
  #     
  #   end
  # end
end