BaseApp.CallbackRoute = Ember.Route.extend({
  setupController: function(controller, params) {
    var token = params.remember_token;
    $.cookie('ember-auth-remember-me', token, {expires: Auth.Config.get('rememberPeriod'), path: '/'});
    this.transitionTo('home');
  },
});