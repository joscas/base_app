@javascript
Feature: Sign Up
  So that I can access the App
  As a new user
  I want to be able to sign up

  Scenario: Signing Up
    When I visit the App
    And I click "Sign Up"
    And I fill in "Name" with "Test User Cucumber"
		And I fill in "Email" with "testuserZ@example.com"
		And I fill in "Password" with "12345678"
		And I fill in "Password confirmation" with "12345678"
    And I click "Sign Up" button
		Then I should see link "Test User Cucumber"

	Scenario: Unsuccessful + Successful Sign Up
    When I visit the App
    And I click "Sign Up"
    And I fill in "Name" with "Test User Cucumber"
		And I fill in "Email" with "testuserZ@example.com"
		And I fill in "Password" with "12345678"
		And I fill in "Password confirmation" with "12345677"
		And I click "Sign Up" button
		Then I should see an error
		And I close the error
		And I fill in "Password confirmation" with "12345678"
    And I click "Sign Up" button
		Then I should see link "Test User Cucumber"