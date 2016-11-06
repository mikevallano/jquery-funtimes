json.array!(@critters) do |critter|
  json.extract! critter, :id, :name, :description, :collar
  json.show link_to 'Show', critter_url(critter), class: 'show-crit-link btn btn-default btn-xs'
  json.edit link_to 'Edit', '#', class: "edit-crit-link btn btn-default btn-xs"
  json.destroy link_to 'Destroy', critter_url(critter, format: :json), method: :delete, remote: true, class: 'delete-crit-link btn btn-default btn-xs'
end
