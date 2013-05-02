BaseApp.ApplicationController = Ember.Controller.extend({
  needs: ["users_edit"],
  
  signOut: function() {
    BaseApp.Auth.signOut();
    // var self=this;
    // Auth.on('signOutSuccess', function() {
    //   self.transitionToRoute('home');
    // });
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
    var backup = {}
    var props = this.getEmberProps("User");
    for (var i=0;i<props.length;i++) {
      backup[props[i]] = content.get(props[i]);
    };
    return backup;
  },
  
  fillForm: function(content, backup){
    for (prop in backup) {
      content.set(prop,backup[prop]);
    }
  },
  
  getEmberProps: function(model) {
    var props = [];
    var obj_name = "BaseApp." + model +".prototype";
    obj = eval(obj_name);
    for (var m in obj) {
      try {
        obj.get(m);
      } catch (err) {
        if (typeof m == "string" && m != "_reference" && m != "data") {
          props.push(m);
        }
      }
    }
    return props;
  }

});
