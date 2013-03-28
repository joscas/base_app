BaseApp.CallbackRoute = Ember.Route.extend({
  setupController: function(controller, params) {
    var token = decodeURIComponent(params.remember_token); //Token comes encoded
    $.cookie('ember-auth-remember-me', token, {expires: Auth.Config.get('rememberPeriod'), path: '/'});
    this.transitionTo('home');
  },
});