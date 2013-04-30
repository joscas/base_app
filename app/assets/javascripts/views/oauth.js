BaseApp.Oauth = Em.View.extend({
  templateName: 'oauth',
  google: function(evt, view) {
    this.authWindow('/users/auth/google_oauth2');
  },
  linkedIn: function(evt, view) {
    this.authWindow('/users/auth/linkedin');
  },
  authWindow: function(href) {
    // Check if running in a Desktop environment or as a standalone App
    var app = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
    if (app) {
      //PhoneGap application
      var url = 'https://starter-app.herokuapp.com' + href;
      // Open call with InAppBrowser
      var ref = window.open(url,'_blank','location=no');
      var interceptCallback = function(event) {
        //Intercepts callback from Oauth, kill InAppBrowser and
        // perform sign using intercepted token 
        var url = event.url;
        var endMatch = /\/callback$/;
        if (endMatch.test(url)) {
          ref.removeEventListener('loadstart', interceptCallback);
          ref.close();
          var tokenMatch = /auth\[auth_token\]=([^&\/#]+)(&|\/|$|\?|\z|#)/;
          var token = tokenMatch.exec(url)[1]
          Auth.signIn({
            auth_token: token,
            remember: true
          });
          Auth.on('signInError', function() {
            alert(Auth.get('jqxhr').statusText);
            //BaseApp.Router.router.transitionTo('home');
          });
          Auth.on('signInSuccess', function() {
            BaseApp.router.transitionTo('home');
          });
        };
      }
      ref.addEventListener('loadstart', interceptCallback);
    } else {
      // Desktop app
      window.location.href = href;
    }
  }
});