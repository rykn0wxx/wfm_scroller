class CreateRegions < ActiveRecord::Migration[5.1]
  def self.up
    create_table :regions do |t|
      t.string :name, null: false, default: ""
      t.string :code, limit: 3
      t.boolean :is_active, default: false

      t.timestamps
    end
  end
  def self.down
    drop_table :regions
  end
end
