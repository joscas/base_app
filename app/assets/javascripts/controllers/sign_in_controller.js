BaseApp.SignInController = Ember.Controller.extend({
  needs: ["users_edit"],
  
  email: null,
  password: null,
  remember: false,
  loginError: false,
  loginResponse: "",
  signIn: function() {
    BaseApp.Auth.signIn({
      data: {
        'email': this.get('email'),
        'password': this.get('password'),
        'remember': this.get('remember')
      }
    });
    var self = this;
    BaseApp.Auth.on('signInError', function() {
      self.set('loginError', true);
      self.set('loginResponse', BaseApp.Auth.get('jqxhr').statusText);
    });
    BaseApp.Auth.on('signInSuccess', function() {
      self.set('loginError', false);
    });
  },
  dismissError: function() {
    this.set('loginError', false);
  }
});