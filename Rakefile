desc "start server using rackup ..."
task :default do
  sh "rackup"
end

task :pdf do
  #sh "a2ps --columns=1 -f 8 -R *.js *.html -o out.ps"
  sh "a2ps --columns=1 -f 8 -R index.html -o out.ps"
  sh "ps2pdf out.ps out.pdf"
end

task :clean do
  sh 'rm -f out.pdf out.ps out.ps~'
end

require 'rspec/core/rake_task'

RSpec::Core::RakeTask.new do |task|
  task.rspec_opts = ["-c", "-f progress"] 
  task.pattern    = 'spec/**/*_spec.rb'
end

