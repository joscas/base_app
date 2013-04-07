Fabricator(:user) do
  email { sequence(:email) { |i| "foo#{i}@example.com"} }
  password 'foobarbaz'
  name 'Test Name#{i}'
end