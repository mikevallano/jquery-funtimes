class Dog < ActiveRecord::Base
  validates_presence_of :description, :name
end
