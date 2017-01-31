class Collar < ActiveRecord::Base
  belongs_to :collarable, polymorphic: true
end
