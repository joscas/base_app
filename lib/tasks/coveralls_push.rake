require 'coveralls/rake/task'
Coveralls::RakeTask.new

task :default => [:spec, :cucumber, 'coveralls:push']
#task :test_with_coveralls => [:spec, :features, 'coveralls:push']
