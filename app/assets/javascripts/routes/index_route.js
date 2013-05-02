BaseApp.IndexRoute = Ember.Route.extend(BaseApp.Auth.AuthRedirectable,{
  redirect: function() {
    this.transitionTo('home');
  }
});