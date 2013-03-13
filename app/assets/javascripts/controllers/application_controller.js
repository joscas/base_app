BaseApp.ApplicationController = Ember.Controller.extend({
  needs: ["sign_in"],
  
  signOut: function() {
    return Auth.signOut();
  },
  
  activeHome: (function() {
      return this.get('currentRoute') === 'home';
  }).property('currentRoute'),

  activeSignUp: (function() {
      return this.get('currentRoute') === 'sign_up';
  }).property('currentRoute'),
  
  activeUsers: (function() {
      return this.get('currentRoute') === 'users';
  }).property('currentRoute'),
  
  activeSignIn: (function() {
      return this.get('currentRoute') === 'sign_in';
  }).property('currentRoute')

});
