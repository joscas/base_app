BaseApp.UsersEditRoute = Auth.Route.extend({
  setupController: function(controller, model) {
    controller.set('content', model);
    this.controllerFor('application').set('currentRoute', 'edit_user');
  }
});