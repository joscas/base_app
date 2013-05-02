BaseApp.UsersIndexRoute = Ember.Route.extend(BaseApp.Auth.AuthRedirectable,{
  model: function() {
    return BaseApp.User.find();
  },
  setupController: function(controller,model) {
    controller.set('users', model);
    return this.controllerFor('application').set('currentRoute', 'users');
  }
});