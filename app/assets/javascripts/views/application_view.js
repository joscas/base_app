BaseApp.ApplicationView = Ember.View.extend({
  didInsertElement: function() {
    Auth.Module.RememberMe.recall();
    Auth.on('signInSuccess', function() {
      BaseApp.Router.router.transitionTo('home');
    });
  }
});