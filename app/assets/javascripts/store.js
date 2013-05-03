BaseApp.Store = DS.Store.extend({
  revision: 11,
});

// For mobile apps an API server is needed
if (typeof API_SERVER != 'undefined' && API_SERVER != "") {
  DS.RESTAdapter.reopen({
    url: API_SERVER // API_SERVER is a global var defined in phonegap_rails.yml
  });
}