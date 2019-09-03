# frozen_string_literal: true

class CoachSkill < ApplicationRecord
  belongs_to :coach
  belongs_to :goal
end
