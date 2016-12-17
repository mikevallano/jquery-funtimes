json.array!(@screenings) do |screening|
  json.extract! screening, :id, :name, :description, :date_watched
  json.url screening_url(screening, format: :json)
end
