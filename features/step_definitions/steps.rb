When(/^I visit the App$/) do
  visit("/")
end

Then(/^I should see link "(.*?)"$/) do |arg1|
  find_link(arg1)
end

When(/^I click "(.*?)"$/) do |arg1|
  find_link(arg1).click
end

When(/^I fill in "(.*?)" with "(.*?)"$/) do |arg1, arg2|
  fill_in arg1, :with => arg2
end

When(/^I click "(.*?)" button$/) do |arg1|
  find_button(arg1).click
end

Then(/^I should see "(.*?)"$/) do |arg1|
  page.should have_content(arg1)
end

Then(/^I should see an error$/) do
  page.should have_css('.alert-error')
end

Then(/^I take screenshot$/) do
  #page.driver.render('~/Downloads/screenshot_POLTERGEIST.png', :full => true)
end

Then(/^I reload the page$/) do
  visit current_path
end

When(/^I check "(.*?)"$/) do |arg1|
  check(arg1)
end

Then(/^I close the error$/) do
  page.find('.close').click
end

Then(/^I should see "(.*?)" button$/) do |arg1|
  find_button(arg1)
end

When(/^I follow the Oauth path for user "(.*?)" with email "(.*?)"$/) do |arg1, arg2|
  user = User.create! :name => arg1,
               :email => arg2,
               :password => '12345678',
               :password_confirmation => '12345678',
               :admin => true
  user.ensure_authentication_token!
  visit "/?auth[auth_token]=#{user.authentication_token}&auth[remember]=true/#/callback"
end

