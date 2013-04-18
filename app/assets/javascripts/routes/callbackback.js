BaseApp.CallbackRoute = Em.Route.extend({
  setupController: function(controller, params) {
  },
  enter: function() {
    window.location.href = '/'; //Reload page to get rid of auth_token in url params
  }
});