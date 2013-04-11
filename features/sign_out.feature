@javascript
Feature: Sign Out
  As a logged in user
  I want to be able to sign out

  Scenario: Signing Out
    When I visit the App
    And I click "Sign In"
		And I fill in "email" with "admin@example.com"
		And I fill in "password" with "12345678"
    And I click "Sign In" button
		Then I should see link "Admin User"
		And I should see link "Users"
		And I click "Sign Out"
		Then I should see link "Sign In"