# frozen_string_literal: true

class SubscriptionsChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'subscriptions_channel'
  end

  def unsubscribed; end
end
