desc 'Build documentation site locally'
task :serve do
  Dir.chdir('docs') do
    sh 'bundle install'
    sh 'bundle exec jekyll serve'
  end
end

# Set default task
task default: :serve