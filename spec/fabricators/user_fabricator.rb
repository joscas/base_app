Fabricator(:user) do
  email { sequence(:email) { |i| "test_user#{i}@example.com"} }
  password '87654321'
  name 'Test User#{i}'
end