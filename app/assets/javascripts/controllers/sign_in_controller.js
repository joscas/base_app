BaseApp.SignInController = Ember.ObjectController.extend({
  email: null,
  password: null,
  signIn: function() {
    return Auth.signIn({
      email: this.get('email'),
      password: this.get('password')
    });
  }
});