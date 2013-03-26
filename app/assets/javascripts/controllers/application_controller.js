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
  }).property('currentRoute'),
  
  backupUserForm: function(content){
    // This can probably be improved to backup properties not previously known
    return backup = {
      name: content.get("name"),
      email: content.get("email"),
      current_password: content.get("current_password"),
      password: content.get("password"),
      password_confirmation: content.get("password_confirmation")
    };
  },
  
  fillForm: function(content, backup){
    for (prop in backup) {
      content.set(prop,backup[prop]);
    }
  }

});
