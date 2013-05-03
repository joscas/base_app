var auth_data = {
  modules: ['emberData',
            'rememberable',
            'authRedirectable',
            'actionRedirectable',
            'urlAuthenticatable'
            ],
  signInEndPoint: '/users/sign_in',
  signOutEndPoint: '/users/sign_out',
  tokenKey: 'auth_token',
  tokenIdKey: 'user_id',
  userModel: 'BaseApp.User',
  rememberable: {
    tokenKey: 'remember_token',
    period: 14,
    autoRecall: true
  },
  authRedirectable: {
    route: 'sign_in'
  },
  actionRedirectable: {
    signInRoute: 'home',
    signOutRoute: 'home'
  },
  urlAuthenticatable: {
    paramsKey: 'auth'
  }
};

// For mobile apps an API server is needed
if (typeof API_SERVER != 'undefined' && API_SERVER != "") {
  auth_data['baseUrl'] = API_SERVER; // API_SERVER is a global var defined by phonegap_rails.yml
};

// Initialize ember-auth
BaseApp.Auth = Ember.Auth.create(auth_data);