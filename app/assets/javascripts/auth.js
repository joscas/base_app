BaseApp.Auth = Ember.Auth.create({
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
});