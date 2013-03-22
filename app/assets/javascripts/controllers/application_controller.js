BaseApp.ApplicationController = Ember.Controller.extend({
  needs: ["users_edit"],
  
  signOut: function() {
    Auth.signOut();
    var self=this;
    Auth.on('signOutSuccess', function() {
      self.transitionToRoute('home');
      //location.reload();
    });
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
