// Auth.Config.reopen({
//   urlAuthentication: true, //Used for Oauth callback 
//   urlAuthenticationParamsKey: 'auth',
//   urlAuthenticationRouteScope: 'both',
//*   tokenCreateUrl: '/users/sign_in',
//*  tokenDestroyUrl: '/users/sign_out',
//*   tokenKey: 'auth_token',
//*  idKey: 'user_id',
//*   rememberMe: true,
//*   rememberTokenKey: 'remember_token',
//*   rememberPeriod: 14,
//*  rememberAutoRecall: true,
//*   rememberAutoRecallRouteScope: 'both',
//*   userModel: BaseApp.User,
//*   signInRoute: 'sign_in',
//*   authRedirect: true,
//   signInRedirectFallbackRoute: 'home',  
// });

BaseApp.Auth = Ember.Auth.create({
  modules: ['emberData','rememberable','authRedirectable'],
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
  }
});
