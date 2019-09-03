# frozen_string_literal: true

class CoachesController < ApplicationController
  def index
    puts params
    goal = params[:goal]
    @coaches = goal ? Goal.find_by(name: goal).coaches : Coach.all
  end

  def show
    @coach = Coach.find(params[:id])
  end
end
