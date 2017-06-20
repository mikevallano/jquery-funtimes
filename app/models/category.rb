class Category < ActiveRecord::Base
  has_many :product_categories, dependent: :destroy
  has_many :products, through: :product_categories

  validates :name, uniqueness: true
end
