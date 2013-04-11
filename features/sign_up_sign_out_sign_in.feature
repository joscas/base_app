@javascript
Feature: Sign Up + Sign Out + Sign In as a different user
  So that I can access the App
  As a new user
  I want to be able to sign up
	And I want to sign out
	And I want to be able to sign in again as a different user

  Scenario: Signing Up
    When I visit the App
    And I click "Sign Up"
    And I fill in "name" with "Test User Cucumber"
		And I fill in "email" with "testuserZ@example.com"
		And I fill in "password" with "12345678"
		And I fill in "password_confirmation" with "12345678"
    And I click "Sign Up" button
		Then I should see link "Test User Cucumber"
		#And I click "Sign Out"
    #And I click "Sign In"
		#And I fill in "email" with "admin@example.com"
		#And I fill in "password" with "12345678"
    #And I click "Sign In" button
		#Then I should see link "Admin User"
		#And I should see link "Users"