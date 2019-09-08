# frozen_string_literal: true

class CoachingsController < ApplicationController
  def create
    coaching = Coaching.new(coaching_params)
    if coaching.save
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        CoachingSerializer.new(coaching)
      ).serializable_hash
      ActionCable.server.broadcast 'coachings_channel', serialized_data
      head :ok
    end
  end

  def index
    coachings = Coaching.all
    render json: coachings
  end

  private

  def coaching_params
    params.require(:coaching).permit(:id, :athlete_id, :coach_id, :goal_id)
  end
end
