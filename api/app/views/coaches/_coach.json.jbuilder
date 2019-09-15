# frozen_string_literal: true

json.coach do
  json.extract! coach, :id, :name, :bio
  json.skills   coach.skills
  json.avatar   rails_blob_url(coach.avatar)
end
