source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.1'
gem 'rack-cors'
gem 'puma', '~> 3.7'
gem 'jquery-rails', '~> 4.2', '>= 4.2.2'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'therubyracer', :platforms => :ruby

gem 'coffee-rails', '~> 4.2'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'

gem 'font-awesome-rails', '~> 4.7', '>= 4.7.0.2'
gem 'bootstrap-sass', '~> 3.3', '>= 3.3.6'
gem 'bootswatch-rails', '~> 3.3', '>= 3.3.5'

group :development do
  gem 'sqlite3'
end

group :production do
  gem 'pg'
  gem 'rails_12factor'
end

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'annotate', '~> 2.7', '>= 2.7.1'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem 'simple_form', '~> 3.5'
gem 'wysiwyg-rails', '~> 2.6', '>= 2.6.2'
gem 'bower-rails', '~> 0.11.0'
