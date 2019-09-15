class AddOnboardToUsers < ActiveRecord::Migration[5.2]
  def change
     add_column :users, :has_onboarded, :boolean
  end
end
