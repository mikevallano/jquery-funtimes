class CreateCritters < ActiveRecord::Migration
  def change
    create_table :critters do |t|
      t.string :name
      t.string :description
      t.boolean :collar

      t.timestamps null: false
    end
  end
end
