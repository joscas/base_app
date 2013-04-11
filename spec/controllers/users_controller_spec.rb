require 'spec_helper'

describe UsersController do
  let(:user) { Fabricate(:user) }
  before { user } # initialize it

  describe 'GET index' do
    context 'unauthorized' do
      before { get :index }

      it 'returns http 401' do
        response.response_code.should == 401
      end
    end

    context 'authorized' do
      before do
        user.ensure_authentication_token!
        get :index, auth_token: user.authentication_token
      end

      it 'returns http 200' do
        response.response_code.should == 200
      end
    end
  end

  describe 'GET show' do
    context 'unauthorized' do
      before { get :show, id: user.id }

      it 'returns http 401' do
        response.response_code.should == 401
      end
    end
    
    context 'wrong token' do
      before { get :show, id: user.id, auth_token: "LTXpN9pzxbWFm55vx1za"} #Made up token

      it 'returns http 401' do
        response.response_code.should == 401
      end
    end

    context 'authorized' do
      before do
        user.ensure_authentication_token!
        get :show, id: user.id, auth_token: user.authentication_token
      end

      it 'returns http 200' do
        response.response_code.should == 200
      end
    end
  end
end