# frozen_string_literal: true

class AddAuthorToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :author_id, :int
  end
end
