require 'spec_helper'

describe OmniauthCallbacksController do
  before(:each) do
    @request.env["devise.mapping"] = Devise.mappings[:user]
    OmniAuth.config.test_mode = true
  end

  describe 'POST google_oauth2' do
    context 'auth success' do
      before do
        OmniAuth.config.mock_auth[:google_oauth2] = OmniAuth::AuthHash.new({:provider => 'google_oauth2',
                                                     :uid => '123545',
                                                     :info => {
                                                       :name => 'Google user',
                                                       :email => 'test_user@gmail.com'
                                                      }
                                                     })
        request.env["omniauth.auth"] = OmniAuth.config.mock_auth[:google_oauth2]
        post :google_oauth2
      end
      it 'redirects' do
        response.response_code.should == 302
      end
      it 'redirects to callback path' do
        path = URI.parse(response.header['Location']).path.scan(/\/(callback)\/(.*)/)[0][0]
        path.should == 'callback'
      end
      it 'returns remember token' do
        remember_token = URI.parse(response.header['Location']).path.scan(/\/(callback)\/(.*)/)[0][1]
        remember_token.should_not be_empty
      end
    end
    context 'auth failure' do
      before do
        OmniAuth.config.mock_auth[:google_oauth2] = :invalid_credentials
        request.env["omniauth.auth"] = OmniAuth.config.mock_auth[:google_oauth2]
        post :google_oauth2
      end
      it 'redirects to err_500' do
        path = URI.parse(response.header['Location']).path.scan(/\/(err_500)/)[0][0]
        path.should == 'err_500'
      end
    end
  end
  
  describe 'POST linkedin' do
    context 'auth success' do
      before do
        OmniAuth.config.mock_auth[:linkedin] = OmniAuth::AuthHash.new({:provider => 'linkedin',
                                                   :uid => '123545',
                                                   :info => {
                                                     :name => 'Linkedin user',
                                                     :email => 'test_linkedin_user@example.com'
                                                    }
                                                   })
       request.env["omniauth.auth"] = OmniAuth.config.mock_auth[:linkedin]
       post :linkedin
      end
      it 'redirects' do
        response.response_code.should == 302
      end
      it 'redirects to callback path' do
        path = URI.parse(response.header['Location']).path.scan(/\/(callback)\/(.*)/)[0][0]
        path.should == 'callback'
      end
      it 'returns remember token' do
        remember_token = URI.parse(response.header['Location']).path.scan(/\/(callback)\/(.*)/)[0][1]
        remember_token.should_not be_empty
      end
    end
    context 'auth failure' do
      before do
        OmniAuth.config.mock_auth[:linkedin] = :invalid_credentials
        request.env["omniauth.auth"] = OmniAuth.config.mock_auth[:linkedin]
        post :linkedin
      end
      it 'redirects to err_500' do
        path = URI.parse(response.header['Location']).path.scan(/\/(err_500)/)[0][0]
        path.should == 'err_500'
      end
    end
  end
end