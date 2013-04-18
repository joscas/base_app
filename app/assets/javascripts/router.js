// history is not supported for IE <= 9.0
/*BaseApp.Router.reopen({
  location: 'history'
});*/

BaseApp.Router.map(function() {
  this.route('home');
  this.route('sign_in');
  this.route('err_500');
  this.route('callback');
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