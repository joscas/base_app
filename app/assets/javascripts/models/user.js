BaseApp.User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  password_confirmation: DS.attr('string'),
  signupError: false,
  validationErrors: {},
  
  becameError: function() {
    this.set('signupError', true);
    this.set('validationErrors', 'Error.');
  },
  becameInvalid: function(errors) {
    this.set('signupError', true);
    this.set('validationErrors', this.errors);
  }
});