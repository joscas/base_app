Auth.Config.reopen({
  urlAuthentication: true, //Used for Oauth callback 
  tokenCreateUrl: '/users/sign_in',
  tokenDestroyUrl: '/users/sign_out',
  tokenKey: 'auth_token',
  //rememberKey: 'remember',
  idKey: 'user_id',
  rememberMe: true,
  rememberTokenKey: 'remember_token',
  rememberPeriod: 14,
  userModel: BaseApp.User,
  signInRoute: 'sign_in',
  authRedirect: true,
  signInRedirectFallbackRoute: 'home',  
});
