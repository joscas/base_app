BaseApp.UsersEditController = Ember.ObjectController.extend({
  save: function() {
    return this.store.commit();
  },
  transitionAfterUpdate: function() {
       if (this.get('content.updated')) {
            this.content.set('updated',false);
            this.transitionToRoute('users.show', this.content);
      }
  }.observes('content.updated'),
  cancel: function() {
    try {this.content.rollback()} catch(err) {};
    this.content.set('validationError',false);
    this.content.set('validationErrors',{});
    return this.transitionToRoute('users.show', this.content);
  },
  dismissError: function() {
    try {this.content.rollback()} catch(err) {};
    this.content.set('validationError',false);
    this.content.set('validationErrors',{});
  }
});