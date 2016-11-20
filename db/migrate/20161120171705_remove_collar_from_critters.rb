class RemoveCollarFromCritters < ActiveRecord::Migration
  def change
    remove_column :critters, :collar
  end
end
