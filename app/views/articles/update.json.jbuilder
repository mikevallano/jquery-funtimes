# json.extract! @article, :id, :name, :description, :created_at, :updated_at
json.status 'success'
json.updated_name @article.name
json.updated_description @article.description
