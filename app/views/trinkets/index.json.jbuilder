json.array!(@trinkets) do |trinket|
  json.extract! trinket, :id, :name, :description
  json.url trinket_url(trinket, format: :json)
end
