FactoryBot.define do
  sequence :string, aliases: [:first_name, :last_name, :password, :name, :description, :state] do |n|
    "string#{n}"
  end

  sequence :email do |n|
    "test_user_#{n}@mail.com"
  end

  sequence :avatar do |n|
    "avatar#{n}.jpg"
  end

  sequence :type do |_n|
    'Developer'
  end

  sequence :date, aliases: [:expired_at] do |n|
    Time.at(n * Time.now.to_i).to_date.to_s
  end
end
