@javascript
Feature: Remember me
  I want to be able to sign in
	And I want to come back later
	And I want to be still signed in

  Scenario: Remember me
    When I visit the App
    And I click "Sign In"
		And I fill in "email" with "admin@example.com"
		And I fill in "password" with "12345678"
		And I check "remember_me"
    And I click "Sign In" button
		Then I should see link "Admin User"
		Then I reload the page
		And I should see link "Admin User"