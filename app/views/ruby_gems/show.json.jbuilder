# json.partial! "ruby_gems/gem", gem: @gem
json.name @gem['name']
json.info @gem['info']
json.dependencies @gem['dependencies']['development'] do |gem|
  json.name gem['name']
end
