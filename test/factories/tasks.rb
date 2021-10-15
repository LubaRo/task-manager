FactoryBot.define do
  factory :task do
    name
    description
    author factory: :manager
    assignee_id factory: :developer
    state
    expired_at
  end
end
