BaseApp.User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  current_password: DS.attr('string'),
  password: DS.attr('string'),
  password_confirmation: DS.attr('string'),
  admin: DS.attr('boolean'),
  validationError: false,
  validationErrors: {},
  updated: false,
  
  becameError: function() {
    if (!this.get('isNew')) this.get('transaction').rollback();
    //this.rollback(); This doesn't work, you get becameClean error
    this.set('validationError',true);
    this.set('validationErrors', 'Error.');
  },
  becameInvalid: function(errors) {
    if (!this.get('isNew')) this.get('transaction').rollback();
    //this.rollback(); This doesn't work, you get becameClean error
    this.set('validationError',true);
    this.set('validationErrors', this.errors);
  },
  didUpdate: function() {
    this.set('updated',true);
  }
});