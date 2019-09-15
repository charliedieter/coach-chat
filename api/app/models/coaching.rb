# frozen_string_literal: true
class Coaching < ApplicationRecord
  include Archivable

  belongs_to :coach
  belongs_to :user, primary_key: :id, foreign_key: :athlete_id, class_name: :User
  belongs_to :goal
  has_many :messages
end
