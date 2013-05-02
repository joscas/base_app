@javascript
Feature: Show user
  I want to be able to see my details
	And be able to reload my details page

  Scenario: Successful edit
    When I visit the App
    And I click "Sign In"
		And I fill in "Email" with "admin@example.com"
		And I fill in "Password" with "12345678"
		And I check "Remember me"
    And I click "Sign In" button
		And I click "Admin User"
		Then I reload the page
		And I should see link "Admin User"
		And I click "Admin User"
		Then I should see "admin@example.com"