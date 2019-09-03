# frozen_string_literal: true

class SubscriptionsController < ApplicationController
  def create
    coaching = Coaching.find_or_create_by(subscription_params)
    @user = User.find(subscription_params['athlete_id'])
 
    if coaching && @user
      render 'users/show'
    else
      render status: 422
    end
  end

  def delete; end

  def index; end

  def show; end

  private

  def subscription_params
    params.require(:subscription).permit(:id, :athlete_id, :coach_id, :goal_id)
  end
end
