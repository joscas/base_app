BaseApp.SignInController = Auth.SignInController.extend({
  needs: ["users_edit"],
  
  email: null,
  password: null,
  remember: false,
  loginError: false,
  loginResponse: "",
  signIn: function() {
    this.registerRedirect();
    Auth.signIn({
      email: this.get('email'),
      password: this.get('password'),
      remember: this.get('remember')
    });
    var self = this;
    Auth.on('signInError', function() {
      self.set('loginError', true);
      self.set('loginResponse', Auth.get('jqxhr').statusText);
    });
    Auth.on('signInSuccess', function() {
      Auth.loggedUser = BaseApp.User.find(Auth.currentUserId);
      self.set('loginError', false);
    });
  },
  dismissError: function() {
    this.set('loginError', false);
  }
});