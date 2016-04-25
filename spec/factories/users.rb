FactoryGirl.define do
  factory :user, :aliases => [:member, :owner] do
    email { FFaker::Internet.email }
    password 'password'
    password_confirmation 'password'
    sequence(:username) { |n| "user_name#{n}" }
    confirmed_at Time.now

    factory :invalid_user do
      email nil
    end
  end

end