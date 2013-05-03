BaseApp.UsersNewController = Ember.ObjectController.extend({
  needs: ["application"],
  
  startEditing: function() {
    // create a new record on a local transaction
    this.transaction = this.get('store').transaction();
    this.set('content', this.transaction.createRecord(BaseApp.User, {}));
  },
  stopEditing: function() {
    // rollback the local transaction if it hasn't already been cleared
    if (this.transaction) {
      this.transaction.rollback();
      this.transaction = null;
    }
  },
  save: function() {
    // commit and then clear the local transaction
    this.transaction.commit();
    this.transaction = null;
  },
  transitionAfterSave: function() {
    // when creating new records, it's necessary to wait for the record to be assigned
    // an id before we can transition to its route (which depends on its id)
    if (this.get('content.id')) {
      BaseApp.Auth.signIn({
        data: {
          'email': this.get('email'),
          'password': this.get('password'),
        }
      });
      this.content.set('validationError',false);
      this.content.set('validationErrors',{});
      this.transitionToRoute('home');
      }
  }.observes('content.id'),

  cancel: function() {
    this.stopEditing();
    this.transitionToRoute('home');
  },
  
  dismissError: function() {
    this.content.set('validationError',false);
    this.content.set('validationErrors',{});
    var backup = this.get('controllers.application').backupUserForm(this.content);
    this.startEditing();
    this.get('controllers.application').fillForm(this.content,backup);
  },
});