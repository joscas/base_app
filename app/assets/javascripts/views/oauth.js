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
      if (typeof API_SERVER != 'undefined') {
        var url = API_SERVER + href; // API_SERVER is a global var defined by phonegap_rails.yml
      }
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
          var token = tokenMatch.exec(url)[1];
          BaseApp.Auth.signIn({data: {auth_token: token, remember: true}});
          BaseApp.Auth.on('signInError', function() {alert(BaseApp.Auth.get('jqxhr').statusText)});
        }
      }
      self = this;
      ref.addEventListener('loadstart', interceptCallback);
    } else {
      // Desktop app
      window.location.href = href;
    }
  }
});