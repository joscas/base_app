#Base App
[![Build Status](https://travis-ci.org/joscas/base_app.png?branch=master)](https://travis-ci.org/joscas/base_app)
[![Coverage Status](https://coveralls.io/repos/joscas/base_app/badge.png?branch=master)](https://coveralls.io/r/joscas/base_app)
[![Dependency Status](https://gemnasium.com/joscas/base_app.png)](https://gemnasium.com/joscas/base_app)

### (Note: Check the **[devel](https://github.com/joscas/base_app/tree/devel "Mobile Phonegap export example")** branch for a mobile exportable example)

## Purpose
This application is intended to serve as a starting point for single page web applications with a rails backend.
It provides generic user registration with Ember.js and Ember-auth. Backend is implemented with Ruby on Rails and Devise. OAuth with different strategies is included.

Master branch is based on MongoDB + Mongoid. For ActiveRecord support use the [active_record](https://github.com/joscas/base_app/tree/active_record "ActiveRecord supported") branch. 

## Live deploy

Heroku deploy with the latest build: <a href="https://starter-app.herokuapp.com" target="_blank">https://starter-app.herokuapp.com</a>


![Login tab](http://joscas.github.com/base_app/starter_app_sign_in.png)

## Configure

Run `rails generate figaro:install` to create the config file. Then you need to edit the `config/application.yml` file like that:
(Keys are invented, replace with your own)

```yaml
GOOGLE_OAUTH_CLIENT_ID:     9090453928898-naibu567doi731fj99t10lbjt76o0s.apps.googleusercontent.com
GOOGLE_OAUTH_CLIENT_SECRET: Ccb9NuORtD7asre574S63Pv65Y
LINKEDIN_API_KEY:           riew01ft345fgzwv
LINKEDIN_SECRET_KEY:        JM443DDs7fhqDinm0u

development:
  GOOGLE_OAUTH_CLIENT_ID:     90901343298.apps.googleusercontent.com
  GOOGLE_OAUTH_CLIENT_SECRET: RyqFajMfdgfgwZsiN6xKt8GE1D
  LINKEDIN_API_KEY:           i8w41p4343ecr2z
  LINKEDIN_SECRET_KEY:        I4eEAdsafBbsdfdfd9o4WD
```

## Contributing
Contributions are very much welcome

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request