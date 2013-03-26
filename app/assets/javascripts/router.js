BaseApp.Router.reopen({
  location: 'history'
});

BaseApp.Router.map(function() {
  this.route('home');
  this.route('sign_in');
  this.resource('users', function() {
    this.route('show', {
      path: '/:user_id'
    });
    this.route('edit', {
      path: '/:user_id/edit'
    });
    this.route('new');
  });
});