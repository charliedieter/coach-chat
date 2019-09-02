# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  def verify
    token = params[:authentication_token]
    user = token.presence && User.find_by(authentication_token: token)
    if user
      render json: user.to_json
    else
      redirect_to(request.referrer || new_user_session_path)
    end
  end
end
