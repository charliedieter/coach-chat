# frozen_string_literal: true

class Coach < ApplicationRecord
  has_one_attached :avatar

  has_many :coach_skills
  has_many :skills, through: :coach_skills, source: :goal
end
