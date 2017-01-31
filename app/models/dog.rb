class Dog < ActiveRecord::Base
  validates_presence_of :description, :name
  has_one :collar, as: :collarable
end
