class Critter < ActiveRecord::Base
  validates_presence_of :description
  has_one :collar, as: :collarable
end
