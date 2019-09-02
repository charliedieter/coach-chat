# frozen_string_literal: true

class User < ApplicationRecord
  acts_as_token_authenticatable

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :omniauthable, omniauth_providers: [:google_oauth2]

  has_one_attached :avatar

  def self.from_omniauth(access_token)
    email = access_token[:info][:email]
    user = User.where(email: email).first

    user ||= User.create(
      name: access_token[:info][:name],
      email: email,
      password: Devise.friendly_token[0, 20]
    )

    user
  end
end
