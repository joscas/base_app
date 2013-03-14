BaseApp.SignInController = Auth.SignInController.extend({
  email: null,
  password: null,
  loginError: false,
  signIn: function() {
    this.registerRedirect();
    Auth.signIn({
      email: this.get('email'),
      password: this.get('password')
    });
    var self = this;
    Auth.on('signInError', function() {
      self.set('loginError', true);
    });
    Auth.on('signInSuccess', function() {
      self.set('loginError', false);
    });
  },
  dismissError: function() {
    this.set('loginError', false);
  }
});