class CreateScreenings < ActiveRecord::Migration
  def change
    create_table :screenings do |t|
      t.string :name
      t.string :description
      t.date :date_watched

      t.timestamps null: false
    end
  end
end
