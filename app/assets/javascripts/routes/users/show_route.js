BaseApp.UsersShowRoute = Ember.Route.extend(BaseApp.Auth.AuthRedirectable,{
  model: function() { //There's no way to ensure Ember will perform authentication before loading model
                      // reloading the user show url would make this fail unless we check first
    if (BaseApp.Auth.get('signedIn')) {
      return BaseApp.Auth.get('user');
    } else {
      return null
    }
  },
  setupController: function(controller, model) {
    if (model) {            // Setting content is over-complicated here because of the same issue with the model
                            // we need to ensure user is signed to allow content setting
      controller.set('content', model);
    } else {
      var self = this;
      if (BaseApp.Auth.get('signedIn')){
        this.transitionTo('users.show',BaseApp.Auth.get('user'));
      } else {
        BaseApp.Auth.on('signInSuccess', function() {
          this.transitionTo('users.show',BaseApp.Auth.get('user'));
        });
      };
    };
    this.controllerFor('application').set('currentRoute', 'user');
  },
  events: {
    edit: function() {
      this.transitionTo('users.edit',this.controller.get('content'));
    }
  }
});