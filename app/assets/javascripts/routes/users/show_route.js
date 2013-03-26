BaseApp.UsersShowRoute = Auth.Route.extend({
  setupController: function(controller, model) {
    controller.set('content', model);
    this.controllerFor('application').set('currentRoute', 'show_user');
  },
  events: {
    edit: function() {
      this.transitionTo('users.edit',this.controller.get('content'));
    }
  }
});