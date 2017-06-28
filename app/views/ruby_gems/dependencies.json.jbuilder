json.array!(@gems) do |gem|
  json.partial! "ruby_gems/gem", gem: gem
end
