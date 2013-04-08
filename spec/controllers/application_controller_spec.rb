require 'spec_helper'

describe ApplicationController do

  describe 'GET index' do
    before { get :index }
    it 'returns http success' do
      response.should be_success
    end
  end

end