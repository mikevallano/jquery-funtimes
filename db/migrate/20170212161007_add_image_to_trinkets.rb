class AddImageToTrinkets < ActiveRecord::Migration
  def change
    add_column :trinkets, :image, :string
  end
end
