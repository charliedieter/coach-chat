# frozen_string_literal: true

require 'open-uri'

class User < ApplicationRecord
  acts_as_token_authenticatable

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :omniauthable, omniauth_providers: [:google_oauth2]

  has_one_attached :avatar

  has_many :subscriptions, foreign_key: :athlete_id, class_name: :Coaching

  def self.from_omniauth(access_token)
    info = access_token[:info]

    email = info[:email]
    given_name = info[:given_name]
    family_name = info[:family_name]
    image_path = info[:image]

    user = User.where(email: email).first || User.create(
      name: name,
      given_name: given_name,
      family_name: family_name,
      email: email,
      password: Devise.friendly_token[0, 20]
    )

    user.avatar.attach(
      io: open(image_path),
      filename: "#{user.id}-#{family_name}--avatar.jpg",
      content_type: 'image/jpg'
    )

    user
  end
end
