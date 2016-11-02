json.extract! @critter, :id, :name, :description, :collar, :created_at, :updated_at
json.show link_to 'Show', critter_url(@critter)
json.edit link_to 'Edit', '#', class: "edit-crit-link"
json.destroy link_to 'Destroy', critter_url(@critter, format: :json), method: :delete, remote: true, class: 'delete-crit-link', data: { confirm: 'Are you sure?'}
