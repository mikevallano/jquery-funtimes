json.array!(@critters) do |critter|
  json.extract! critter, :id, :name, :description, :collar
  json.show link_to 'Show', critter_url(critter)
  json.edit link_to 'Edit', edit_critter_url(critter), class: "edit-crit-link"
  json.destroy link_to 'Destroy', critter_url(critter, format: :json), method: :delete, remote: true, id: 'delete-crit-btn', data: { confirm: 'Are you sure?'}
end
