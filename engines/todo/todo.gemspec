$:.push File.expand_path("lib", __dir__)

# Maintain your gem's version:
require "todo/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "todo"
  s.version     = Todo::VERSION
  s.authors     = ["Toby Retallick"]
  s.email       = ["toby.retallick@gmail.com"]
  s.homepage    = "http://www.myhomepage.com"
  s.summary     = "Summary of Todo."
  s.description = "Description of Todo."
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]

  s.add_dependency "rails", "~> 5.2.1"

  s.add_development_dependency "pg"
end
