json.array!(@trinket_comments) do |trinket_comment|
  json.extract! trinket_comment, :id, :name, :content
  json.url trinket_comment_url(trinket_comment, format: :json)
end
