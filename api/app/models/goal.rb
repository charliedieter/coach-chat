class Goal < ApplicationRecord
  has_many :coach_skills
  has_many :coaches, through: :coach_skills
end
