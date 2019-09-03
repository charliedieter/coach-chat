# frozen_string_literal: true

class Coaching < ApplicationRecord
  belongs_to :coach
  belongs_to :user, primary_key: :athlete_id
  belongs_to :goal

  has_many   :messages
end
