BaseApp.UsersIndexRoute = Auth.Route.extend({
  model: function() {
    return BaseApp.User.find();
  },
  setupController: function(controller,model) {
    controller.set('users', model);
    return this.controllerFor('application').set('currentRoute', 'users');
  }
});