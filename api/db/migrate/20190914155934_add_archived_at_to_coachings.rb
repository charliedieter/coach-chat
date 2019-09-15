class AddArchivedAtToCoachings < ActiveRecord::Migration[5.2]
  def change
    add_column :coachings, :archived_at, :datetime
  end
end
