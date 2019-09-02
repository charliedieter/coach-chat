# frozen_string_literal: true

class CreateCoachings < ActiveRecord::Migration[5.2]
  def change
    create_table :coachings do |t|
      t.integer :athlete_id
      t.integer :coach_id
      t.integer :goal_id

      t.timestamps
    end

    add_index :coachings, %i[athlete_id coach_id goal_id], unique: true
  end
end
