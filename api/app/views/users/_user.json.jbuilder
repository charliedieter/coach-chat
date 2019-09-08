# frozen_string_literal: true

json.user do
  json.extract! user, :id, :name, :email, :authentication_token
  # json.avatar rails_blob_url(user.avatar) if user.avatar
  json.subscriptions do
    user.subscriptions.each do |s|
      json.set! s.id do
        json.extract! s, :id, :athlete_id, :coach_id, :goal_id, :goal
        json.partial! 'coaches/coach', coach: s.coach
      end
    end
  end
end
