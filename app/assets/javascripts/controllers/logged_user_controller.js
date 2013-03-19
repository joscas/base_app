BaseApp.LoggedUserController = Ember.ObjectController.extend({
  //setupController: function(controller) {
  //  var name = BaseApp.User.find(Auth.currentUserId).name;
  //  controller.set('content', name);
  //},
  name: function() {
    var user = BaseApp.User.find(Auth.currentUserId);
    console.log(user);
    return user.get("name");
    }.property('content.name')
});