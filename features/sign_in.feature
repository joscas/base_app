@javascript
Feature: Sign In
  So that I can access the App
  As an existing  user
  I want to be able to sign in

  Scenario: Signing In Admin user
    When I visit the App
    And I click "Sign In"
		And I fill in "email" with "admin@example.com"
		And I fill in "password" with "12345678"
    And I click "Sign In" button
		Then I should see link "Admin User"
		
  Scenario: Signing In unknown user
    When I visit the App
    And I click "Sign In"
		And I fill in "email" with "unknown@example.com"
		And I fill in "password" with "ADFGHJKLR"
    And I click "Sign In" button
		Then I should see an error