BaseApp.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('home');
  }
});