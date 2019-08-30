require 'faker'
# Goals
goals = [
    {
    name: "run",
    icon_name: "running",
    icon_type: "FontAwesome5"
  },
  {
    name: "bike",
    icon_name: "bike",
    icon_type: "MaterialCommunityIcons"
  },
  {
    name: "triathlon",
    icon_name: "bike",
    icon_type: "MaterialCommunityIcons"
  },
  {
    name: "swim",
    icon_name: "swimmer",
    icon_type: "FontAwesome5"
  },
  {
    name: "strength training",
    icon_name: "weight-pound",
    icon_type: "MaterialCommunityIcons"
  },
  {
    name: "body building",
    icon_name: "weight-pound",
    icon_type: "MaterialCommunityIcons"
  },
  {
    name: "weight loss",
    icon_name: "weight",
    icon_type: "FontAwesome5"
  }
]

goals.each do |g|
  Goal.find_or_create_by(g)
end

# # Coaches
unless Coach.any? do
  coaches = []
  100.times do
    coaches << {
      name: Faker::Omniauth.google[:info][:name],
      bio: Faker::Hipster.paragraph(sentence_count: 2)
    }
  end

  Coach.create(coaches)

  Coach.all.each do |c| 
    unless c.avatar.attached?
      c.avatar.attach(URI.parse(Faker::Avatar.image(size: "50x50", format: "jpg"))) 
  end
end

# unless User.any? do 
#   users = []
#   100.times do
#     info = Faker::Omniauth.google[:info]
#     users << {
#       name: info[:name],
#       email: info[:email]
#     }

#     User.create(users)

#     User.all.each do |c| 
#       unless c.avatar.attached?
#         c.avatar.attach(URI.parse(Faker::Avatar.image(size: "50x50", format: "jpg")))
#   end
#   end
# end 

# coach_count = Coach.count
# user_count = User.count
# goal_count = Goal.count

# coach_skills = []
# 100.times do 
#   coach_skills << {
#     coach_id: Coach.offset(rand(coach_count)).first,
#     goal_id: Goal.offset(rand(goal_count)).first
#   }
# end 
# CoachSkill.create(coach_skills)


# coachings = []
# 100.times do 
#   coachings << {
#         coach_id: Coach.offset(rand(coach_count)).first,
#         goal_id: Goal.offset(rand(goal_count)).first,
#         user_id: User.offset(rand(user_count)).first,
#   }
# end

# Coaching.create(coachings)