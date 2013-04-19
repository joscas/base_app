require 'spec_helper'

describe SessionsController do
  let(:user) { Fabricate(:user) }

  before do
    @request.env['devise.mapping'] = Devise.mappings[:user];
    user.ensure_authentication_token!
  end

  describe 'POST create' do
    context 'no param' do
      before { post :create }

      it_behaves_like 'http code', 400 # DRYed up
    end

    context 'wrong credentials' do
      before { post :create, email: user.email, password: '' }

      it_behaves_like 'http code', 401 # DRYed up
    end

    context 'normal email + password auth' do
      it_behaves_like 'auth response' do # uses shared example here
        let(:params) { { email: user.email, password: user.password } }
      end
    end

    context 'remember token auth' do
      it_behaves_like 'auth response' do # uses shared example here
        let(:params) do
          user.remember_me!
          data = User.serialize_into_cookie(user)
          token = "#{data.first.first}-#{data.last}"
          { remember_token: token }
        end
      end
    end
    
    context 'url-authentication auth' do
      before do
        @user = Fabricate(:user)
        @user.ensure_authentication_token!
        auth_token = @user.authentication_token
        xhr :post,
            :create,
            :auth_token => auth_token,
            :remember => 'true'
      end
      it 'returns http 201' do
        response.response_code.should == 201
      end
      subject { JSON.parse response.body }
      it { should include 'user_id' }
      it { should include 'auth_token' }
      it { should include 'remember_token'}
    end
  end

  describe 'DELETE destroy' do
    context 'no param' do
      before { delete :destroy }

      it_behaves_like 'http code', 400 # DRYed up
    end

    context 'wrong credentials' do
      before { delete :destroy, auth_token: '' }

      it_behaves_like 'http code', 401 # DRYed up
    end

    context 'normal auth token param' do
      before { delete :destroy, auth_token: user.authentication_token }
      subject { JSON.parse response.body }

      it 'includes user id' do
        should include 'user_id'
      end

      it_behaves_like 'http code', 200 # DRYed up
    end
  end
end