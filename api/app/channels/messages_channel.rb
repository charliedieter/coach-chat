# frozen_string_literal: true

class MessagesChannel < ApplicationCable::Channel
  def subscribed
    subscription = Coaching.find(params[:subscription])
    stream_for subscription
  end

  def unsubscribed; end
end
