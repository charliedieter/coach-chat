class User < ApplicationRecord
  acts_as_token_authenticatable

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :omniauthable, omniauth_providers: [:google_oauth2]

  def self.from_omniauth(access_token)
    email = access_token.info['email']
    user = User.where(email: email).first

    return user || User.create(
      name: access_token.info['name'],
      email: email,
      password: Devise.friendly_token[0, 20]
    )
  end
end
