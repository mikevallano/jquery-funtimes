class CreateTrinkets < ActiveRecord::Migration
  def change
    create_table :trinkets do |t|
      t.string :name
      t.string :description

      t.timestamps null: false
    end
  end
end
