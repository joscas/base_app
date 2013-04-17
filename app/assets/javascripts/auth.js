Auth.Config.reopen({
  urlAuthentication: true, //Used for Oauth callback 
  urlAuthenticationParamsKey: 'auth',
  tokenCreateUrl: '/users/sign_in',
  tokenDestroyUrl: '/users/sign_out',
  tokenKey: 'auth_token',
  idKey: 'user_id',
  rememberMe: true,
  rememberTokenKey: 'remember_token',
  rememberPeriod: 14,
  rememberAutoRecall: true,
  rememberAutoRecallRouteScope: 'both',
  userModel: BaseApp.User,
  signInRoute: 'sign_in',
  authRedirect: true,
  signInRedirectFallbackRoute: 'home',  
});