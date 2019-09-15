# frozen_string_literal: true

class CoachingsController < ApplicationController
  def create
    coaching = Coaching.find_by(
      athlete_id: coaching_params[:athlete_id],
      coach_id: coaching_params[:coach_id],
      goal_id: coaching_params[:goal_id]
    )

    current_user = User.find(coaching_params[:athlete_id])

    if coaching
      coaching.archived_at = nil
    else
      coaching = Coaching.new(coaching_params)
    end

    current_user.has_onboarded = true unless current_user.has_onboarded

    if coaching.save! && current_user.save!
      # eventually use current_user
      @coachings = current_user.active_subscriptions
      render '/coachings/index'
    else
      render json: coaching.errors, status: 422
    end
  end

  def update
    coaching = Coaching.find(params[:id])
    coaching.archived_at = DateTime.now if params[:archive]

    if coaching.save!
      @coachings = User.find(coaching_params[:athlete_id]).active_subscriptions
      render '/coachings/index'
    else
      render json: coaching.errors, status: 422
    end
  end

  private

  def coaching_params
    params.require(:subscription).permit(:id, :athlete_id, :coach_id, :goal_id)
  end
end
