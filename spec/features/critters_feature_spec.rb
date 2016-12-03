require "rails_helper"

RSpec.feature "Critters feature spec", type: :feature do

  let(:critter) { create(:critter) }
  let(:critter2) { create(:critter) }

  feature "critters index page" do

    WebMock.disable_net_connect!(:allow_localhost => true)

    scenario "index page shows critters", js: true do
      visit critters_path
      expect(page).to have_content(critter.name)
    end

  end

end
