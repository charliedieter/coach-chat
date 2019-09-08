# frozen_string_literal: true

class MessagesController < ApplicationController
  def create
    message = Message.new(message_params)
    coaching = Coaching.find(message_params[:coaching_id])
    if message.save
      MessagesChannel.broadcast_to coaching, message.to_json
      head :ok
    end
  end

  def index
    render json: Coaching.find(params['coaching_id']).messages
  end

  private

  def message_params
    params.require(:message).permit(:text, :coaching_id, :author_id)
  end
end
