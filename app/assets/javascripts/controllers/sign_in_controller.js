BaseApp.SignInController = Auth.SignInController.extend({
  email: null,
  password: null,
  loginError: false,
  //loginState: {
  //  error: false
  //},
  signIn: function() {
    this.registerRedirect();
    console.log(this);
    Auth.signIn({
      email: this.get('email'),
      password: this.get('password')
    });
    //var outer = this.get('loginState');
    var f = function() {
      //this.set('loginError', true);
      //this.set("loginState.error", true);
      //BaseApp.SignInController.set('loginError', true);
      console.log("This is a signin error");
      //console.log(this.get('loginError'));
      console.log(this);
      console.log(Auth.get('jqxhr'));
    };
    Auth.on('signInError', f);
  }
});