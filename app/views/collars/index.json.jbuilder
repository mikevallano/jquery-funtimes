json.array!(@collars) do |collar|
  json.extract! collar, :id, :name, :collarable_id
  json.url collar_url(collar, format: :json)
end
