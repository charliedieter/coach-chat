# frozen_string_literal: true

class AddFieldsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :given_name, :string
    add_column :users, :family_name, :string
  end
end
