json.extract! critter, :id, :name, :description
json.show link_to 'Show', critter_url(critter), class: 'show-crit-link btn btn-default btn-xs'
json.edit link_to 'Edit', '', data: {toggle: 'modal', target: '#crit-form-modal'}, class: "edit-crit-link btn btn-default btn-xs"
json.edit_url critter_path(critter, format: :json)
json.destroy link_to 'Destroy', critter_url(critter, format: :json), method: :delete, remote: true, class: 'delete-crit-link btn btn-default btn-xs'
