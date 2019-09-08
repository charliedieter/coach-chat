# frozen_string_literal: true

class MessagesChannel < ApplicationCable::Channel
  def subscribed
    coaching = Coaching.find(params[:coaching_id])
    stream_for coaching
  end

  def unsubscribed; end
end
