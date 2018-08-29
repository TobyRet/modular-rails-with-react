$:.push File.expand_path("lib", __dir__)

# Maintain your gem's version:
require "allocation/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "allocation"
  s.version     = Allocation::VERSION
  s.authors     = ["Toby Retallick"]
  s.email       = ["toby.retallick@gmail.com"]
  s.homepage    = "http://www.allocation.com"
  s.summary     = "Summary of Allocation."
  s.description = "Description of Allocation."
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]

  s.add_dependency "rails", "~> 5.2.1"

  s.add_development_dependency "pg"
end
