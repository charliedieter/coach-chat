class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.string :name
      t.string :icon_name
      t.string :icon_type

      t.timestamps
    end
  end
end
