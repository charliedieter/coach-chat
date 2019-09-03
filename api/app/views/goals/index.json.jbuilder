# frozen_string_literal: true

@goals.each do |goal|
  json.set! goal.id do
    json.extract! goal, :id, :name, :icon_name, :icon_type
  end
end
