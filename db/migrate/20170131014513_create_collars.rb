class CreateCollars < ActiveRecord::Migration
  def change
    create_table :collars do |t|
      t.string :name
      t.references :collarable, polymorphic: true, index: true

      t.timestamps null: false
    end
  end
end
