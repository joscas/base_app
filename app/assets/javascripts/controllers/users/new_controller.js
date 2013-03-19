BaseApp.UsersNewController = Ember.ObjectController.extend({
  save: function() {
    return this.store.commit();
  },
  cancel: function() {
    this.content.deleteRecord();
    return this.transitionToRoute('home');
  },
  transitionAfterSave: function() {
    if (this.get('content.id')) {
      Auth.signIn({
        email: this.get('email'),
        password: this.get('password')
      });
      this.transitionToRoute('home');
      }
  }.observes('content.id'),
  
});