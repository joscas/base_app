BaseApp.UsersEditRoute = Ember.Route.extend(BaseApp.Auth.AuthRedirectable,{
  setupController: function(controller, model) {
    controller.set('content', model);
    this.controllerFor('application').set('currentRoute', 'edit_user');
  }
});