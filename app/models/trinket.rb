class Trinket < ActiveRecord::Base
  mount_uploader :image, TrinketImageUploader
  has_many :comments
end
