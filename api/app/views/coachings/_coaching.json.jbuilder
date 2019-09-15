# frozen_string_literal: true

json.coaching do
  json.extract! coaching, :id, :athlete_id, :coach_id, :goal_id, :goal, :archived_at
  json.partial! 'coaches/coach', coach: coaching.coach
end
