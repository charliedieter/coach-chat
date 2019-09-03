# frozen_string_literal: true

class GoalsController < ApplicationController
  def index
    @goals = Goal.all
  end
end
