FactoryGirl.define do
  factory :critter do
    sequence(:name) { |n| "critter name#{n}" }
    sequence(:description) { |n| "crit description#{n}" }

    factory :invalid_critter do
      description nil
    end
  end

end
