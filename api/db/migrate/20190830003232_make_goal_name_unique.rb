class MakeGoalNameUnique < ActiveRecord::Migration[5.2]
  def change
    add_index :goals, :name, unique: true
  end
end
