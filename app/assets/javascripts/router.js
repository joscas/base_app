BaseApp.Router.reopen({
  location: 'history'
});

BaseApp.Router.map(function() {
  this.route('sign_in');
  this.route('sign_out');
});