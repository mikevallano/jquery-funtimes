require 'rails_helper'

RSpec.describe Critter, type: :model do

  let(:critter) { create(:critter) }
  let(:invalid_critter) { build(:invalid_critter) }

  it { is_expected.to validate_presence_of(:description) }

  it "has a valid factory" do
    expect(critter).to be_valid
  end

  it "has an invalid factory" do
    expect(invalid_critter).to be_invalid
  end

end
