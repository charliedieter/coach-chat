class AddOnboardStepToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :onboard_step, :integer
  end
end
