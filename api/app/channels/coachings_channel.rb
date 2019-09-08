# frozen_string_literal: true

class CoachingsChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'coachings_channel'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
