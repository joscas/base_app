@javascript
Feature: Edit user
  I want to be able to sign in
	And be able to edit my user details

  Scenario: Successful edit
    When I visit the App
    And I click "Sign In"
		And I fill in "Email" with "admin@example.com"
		And I fill in "Password" with "12345678"
    And I click "Sign In" button
		And I click "Admin User"
		And I click "Edit" button
		And I fill in "Name" with "Edited User1"
		And I fill in "Current password" with "12345678"
		And I click "Save" button
		Then I should see link "Edited User1"
		
	# Scenario: Consecutive unsuccessful edit
	#   When I visit the App
	#   And I click "Sign In"
	# 	And I fill in "Email" with "admin@example.com"
	# 	And I fill in "Password" with "12345678"
	#   And I click "Sign In" button
	# 	And I click "Admin User"
	# 	And I click "Edit" button
	# 	And I fill in "Name" with "Edited User1"
	# 	And I click "Save" button
	# 	Then I should see an error
	# 	And I close the error
	# 	And I fill in "Name" with "Edited User2"
	# 	And I click "Save" button
	# 	Then I should see an error
	# 	And I click "Cancel" button
	# 	Then I should see "Edit" button
		