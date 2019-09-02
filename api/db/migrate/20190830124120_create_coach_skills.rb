# frozen_string_literal: true

class CreateCoachSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :coach_skills do |t|
      t.integer :coach_id
      t.integer :goal_id
    end

    add_index :coach_skills, %i[coach_id goal_id], unique: true
  end
end
