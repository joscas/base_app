BaseApp.SignOutController = Ember.ObjectController.extend({
  signOut: function() {
    return Auth.signOut();
  }
});