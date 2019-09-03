# frozen_string_literal: true

require 'faker'
require 'open-uri'

Goal.delete_all
Coach.delete_all
User.delete_all
CoachSkill.delete_all
Coaching.delete_all

# Goals
goals = [
  {
    name: 'run',
    icon_name: 'running',
    icon_type: 'FontAwesome5'
  },
  {
    name: 'bike',
    icon_name: 'bike',
    icon_type: 'MaterialCommunityIcons'
  },
  {
    name: 'triathlon',
    icon_name: 'bike',
    icon_type: 'MaterialCommunityIcons'
  },
  {
    name: 'swim',
    icon_name: 'swimmer',
    icon_type: 'FontAwesome5'
  },
  {
    name: 'strength training',
    icon_name: 'weight-pound',
    icon_type: 'MaterialCommunityIcons'
  },
  {
    name: 'body building',
    icon_name: 'weight-pound',
    icon_type: 'MaterialCommunityIcons'
  },
  {
    name: 'weight loss',
    icon_name: 'weight',
    icon_type: 'FontAwesome5'
  }
]

goals.each do |g|
  goal = Goal.find_or_create_by(name: g[:name])
  goal.icon_name = g[:icon_name]
  goal.icon_type = g[:icon_type]
  goal.save!
end

## Coaches
100.times do
  Coach.find_or_create_by(
    name: Faker::Omniauth.google[:info][:name],
    bio: Faker::Hipster.paragraph
  )
end

Coach.all.each do |c|
  c.avatar.attach(
    io: File.open(File.join(Rails.root, 'stock-images', "#{rand(1..9)}.jpg")),
    filename: "#{c[:id]}--avatar.jpg",
    content_type: 'image/jpg'
  )
end

## Users
100.times do
  User.from_omniauth(Faker::Omniauth.google)
end

User.all.each do |u|
  img = Faker::Avatar.image(size: '50x50', format: 'jpg')
  u.avatar.attach(
    io: open(img),
    filename: "#{u.email}-avatar.jpg",
    content_type: 'image/jpg'
  )
end

# Create random coach skills & coachings (coach <--> skill & coach <--> athlete joins)
coach_count = Coach.count
user_count = User.count
goal_count = Goal.count

100.times do |idx|
  CoachSkill.find_or_create_by(
    coach_id: Coach.offset(rand(coach_count)).first.id,
    goal_id: Goal.offset(rand(goal_count)).first.id
  )
end

100.times do
  Coaching.find_or_create_by(
    coach_id: Coach.offset(rand(coach_count)).first.id,
    goal_id: Goal.offset(rand(goal_count)).first.id,
    athlete_id: User.offset(rand(user_count)).first.id
  )
end
