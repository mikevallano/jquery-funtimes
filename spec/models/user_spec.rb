require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { FactoryGirl.create(:user) }
  let(:invalid_user) { FactoryGirl.build(:invalid_user) }

  it { is_expected.to validate_uniqueness_of(:username) }
  it { is_expected.to validate_presence_of(:username) }
  it { is_expected.to validate_presence_of(:email) }

  context "with a valid factory" do
    it "has a valid factory" do
      expect(user).to be_valid
    end
  end #valid factory context

  context "without a valid factory" do
    it "has an invalid factory" do
      expect(invalid_user).not_to be_valid
    end
  end

end #final