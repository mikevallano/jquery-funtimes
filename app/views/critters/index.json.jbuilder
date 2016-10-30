json.array!(@critters) do |critter|
  json.extract! critter, :id, :name, :description, :collar
  json.url critter_url(critter, format: :json)
  json.edit link_to 'Edit', critter_url(critter)
  json.destroy link_to 'Destroy', critter_url(critter, format: :json), method: :delete, remote: true, id: 'delete-crit-btn', data: { confirm: 'Are you sure?'}
end
