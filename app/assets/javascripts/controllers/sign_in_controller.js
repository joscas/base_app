BaseApp.SignInController = Auth.SignInController.extend({
  needs: ["users_edit"],
  
  email: null,
  password: null,
  loginError: false,
  loginResponse: "",
  signIn: function() {
    this.registerRedirect();
    Auth.signIn({
      email: this.get('email'),
      password: this.get('password')
    });
    var self = this;
    Auth.on('signInError', function() {
      self.set('loginError', true);
      self.set('loginResponse', Auth.get('jqxhr').statusText);
    });
    Auth.on('signInSuccess', function() {
      self.set('loginError', false);
      self.set('controllers.users_edit.content', BaseApp.User.find(Auth.currentUserId));
    });
  },
  dismissError: function() {
    this.set('loginError', false);
  }
});