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