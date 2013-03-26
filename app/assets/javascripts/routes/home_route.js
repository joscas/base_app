BaseApp.HomeRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    this.controllerFor('application').set('currentRoute', 'home');
  }
});