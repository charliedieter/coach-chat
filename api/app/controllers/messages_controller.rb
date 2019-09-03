# frozen_string_literal: true

class MessagesController < ApplicationController
  def create
    message = Message.new(message_params)
    conversation = Conversation.find(message_params[:subscription_id])

    if message.save
      MessagesChannel.broadcast_to conversation, message.to_json
      head :ok
    end
  end

  private

  def message_params
    params.require(:message).permit(:text, :subscription_id)
  end
end
