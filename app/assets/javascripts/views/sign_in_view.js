BaseApp.SignInView = Em.View.extend({
  templateName: 'sign_in',
  email: null,
  password: null,
  submit: function(evt, view) {
    evt.preventDefault();
    evt.stopPropagation();
    return Auth.signIn({
      email: this.get('email'),
      password: this.get('password')
    });
  }
});