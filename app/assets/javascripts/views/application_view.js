BaseApp.ApplicationView = Ember.View.extend({
  didInsertElement: function() {
    Auth.Module.RememberMe.recall();
    Auth.on('signInSuccess', function() {
      Auth.loggedUser = BaseApp.User.find(Auth.currentUserId);
    });
  }
});