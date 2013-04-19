@javascript
Feature: Sign In
  So that I can access the App
  As an existing  user
  I want to be able to sign in

  Scenario: Signing In Admin user
    When I visit the App
    And I click "Sign In"
		And I fill in "Email" with "admin@example.com"
		And I fill in "Password" with "12345678"
    And I click "Sign In" button
		Then I should see link "Admin User"
		And I should see link "Users"
		
  Scenario: Signing In unknown user
    When I visit the App
    And I click "Sign In"
		And I fill in "Email" with "unknown@example.com"
		And I fill in "Password" with "ADFGHJKLR"
    And I click "Sign In" button
		Then I should see an error
		
  Scenario: Signing In with Oauth
    When I visit the App
    And I click "Sign In"
  		Then I should see link "google_oauth"
  		And I should see link "linkedin_oauth"
  		When I follow the Oauth path for user "Google User" with email "test_user@gmail.com"
  		Then I should see link "Google User"