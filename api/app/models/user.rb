class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :omniauthable, omniauth_providers: [:google_oauth2]

  def self.from_omniauth(access_token)
    email = access_token.extra.id_info.email
    user = User.where(email: email).first
    user ||= User.create(
      name: 'later',
      email: email,
      password: Devise.friendly_token[0,20]
    )
    user
  end
end
