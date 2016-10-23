json.array!(@critters) do |critter|
  json.extract! critter, :id, :name, :description, :collar
  json.url critter_url(critter, format: :json)
end
