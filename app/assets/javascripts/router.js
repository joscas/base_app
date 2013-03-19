BaseApp.Router.reopen({
  location: 'history'
});

BaseApp.Router.map(function() {
  this.route('home');
  this.route('sign_in');
  //this.route('sign_up');
  this.resource('users', function() {
    this.route('show');
    this.route('new');
  });
});

BaseApp.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('home');
  }
});


BaseApp.HomeRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    this.controllerFor('application').set('currentRoute', 'home');
  }
});

BaseApp.SignInRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    this.controllerFor('application').set('currentRoute', 'sign_in');
  }
});

//BaseApp.SignUpRoute = Ember.Route.extend({
//  setupController: function(controller, model) {
//    this.controllerFor('application').set('currentRoute', 'sign_up');
//  }
//});

BaseApp.UsersNewRoute = Ember.Route.extend({
  model: function() {
    return BaseApp.User.createRecord();
  },
  setupController: function(controller, model) {
    controller.set('content', model);
    this.controllerFor('application').set('currentRoute', 'sign_up');
  },
  events: {
    save: function(user) {
      user.get('transaction').commit();
      this.transitionTo('home');
    },
    cancel: function() {
      this.transitionTo('home');
    }
  }
});

BaseApp.UsersIndexRoute = Ember.Route.extend({
  model: function() {
    return BaseApp.User.find();
  },
  setupController: function(controller, model) {
    controller.set('users', model);
    return this.controllerFor('application').set('currentRoute', 'users');
  }
});