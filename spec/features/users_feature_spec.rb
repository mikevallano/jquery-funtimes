require "rails_helper"

RSpec.feature "Users feature spec", :type => :feature do

  feature "Users can sign up, sign in, log out, and visit profile" do
    let(:email) { FFaker::Internet.email }
    let(:username) { FFaker::Internet.user_name }
    let(:existing_user) { FactoryGirl.create(:user, password: "password") }

    scenario "user can successfully sign up" do
      sign_up_with(email, username, "password")
      expect(page).to have_content("#{@current_user.username}")
    end

    # scenario "user is redirected to awaiting confirmation page after signing up" do
    #   visit root_path

    #   click_link "sign_up_nav_link"

    #   fill_in "user_email", with: email
    #   fill_in "user_username", with: username
    #   fill_in "user_password", with: "password"
    #   fill_in "user_password_confirmation", with: "password"
    #   click_button "sign_up_button_new_registration"

    #   expect(current_url).to eq(awaiting_confirmation_url)
    # end

    # scenario "user is sent a confirmation email after signing up" do
    #   visit root_path

    #   click_link "sign_up_nav_link"

    #   fill_in "user_email", with: email
    #   fill_in "user_username", with: username
    #   fill_in "user_password", with: "password"
    #   fill_in "user_password_confirmation", with: "password"
    #   click_button "sign_up_button_new_registration"

    #   expect(last_email).to have_content("To: #{email}")
    # end

    # scenario "user can not log in until confirmed" do
    #   visit root_path

    #   click_link "sign_up_nav_link"

    #   fill_in "user_email", with: email
    #   fill_in "user_username", with: username
    #   fill_in "user_password", with: "password"
    #   fill_in "user_password_confirmation", with: "password"
    #   click_button "sign_up_button_new_registration"

    #   visit user_lists_path(User.last)
    #   expect(page).to have_selector("#user_login")
    #   url = URI.parse(current_url)
    #   expect("#{url}").to include("sign_in")
    # end

    # scenario "existing users can sign in with email" do
    #   visit root_path
    #   click_link "sign_in_nav_link"
    #   fill_in "user_login", with: existing_user.email
    #   fill_in "user_password", with: existing_user.password
    #   click_button "log_in_button_new_session"
    #   @current_user = User.find_by_email(existing_user.email)
    #   expect(page).to have_content("#{@current_user.username}")
    # end

    # scenario "existing user can sign in with username" do
    #   visit root_path
    #   click_link "sign_in_nav_link"
    #   fill_in "user_login", with: existing_user.username
    #   fill_in "user_password", with: existing_user.password
    #   click_button "log_in_button_new_session"
    #   @current_user = User.find_by_email(existing_user.email)
    #   expect(page).to have_content("#{@current_user.username}")
    # end

    # scenario "user can sign out" do
    #   sign_in_user(existing_user)
    #   click_link "sign_out_nav_link"
    #   expect(page).to have_content("Signed out successfully")
    # end

    # scenario "user can reset their password" do

    #   sign_in_user(existing_user)
    #   click_link "sign_out_nav_link"
    #   click_link "sign_in_nav_link"
    #   click_link "Forgot your password?"
    #   fill_in "Email", with: existing_user.email
    #   click_link_or_button "Send me reset password instructions"
    #   open_email(existing_user.email)
    #   expect(current_email).to have_content("#{existing_user.email}")
    #   expect(current_email).to have_content "Change my password"
    #   current_email.click_link "Change my password"
    #   fill_in "New password", with: "password1"
    #   fill_in "Confirm new password", with: "password1"
    #   click_link_or_button "Change my password"
    #   expect(page).to have_content("Your password has been changed successfully.")
    # end

    # scenario "user can visit their profile page" do
    #   sign_in_user(existing_user)
    #   visit(user_path(existing_user))
    #   expect(page).to have_content(existing_user.email)
    # end

    # scenario "user profile page has slugged url" do
    #   sign_in_user(existing_user)
    #   visit(user_path(existing_user))
    #   url = URI.parse(current_url)
    #   expect("#{url}").to include("#{existing_user.slug}")
    # end

    # scenario "user can edit their info from the profile page" do
    #   sign_in_user(existing_user)
    #   visit(user_path(existing_user))
    #   click_link "edit_user_link_profile_page"
    #   fill_in "user_username", with: "newusername"
    #   fill_in "user_current_password", with: "password"
    #   click_button "Update"
    #   visit(root_path)
    #   visit(user_path(existing_user))
    #   expect(page).to have_content("newusername")
    # end

    # scenario "user can cancel their account from profile page" do
    #   sign_in_user(existing_user)
    #   visit(user_path(existing_user))
    #   click_link "edit_user_link_profile_page"
    #   click_link_or_button "Cancel my account"
    #   expect(page).to have_content("cancelled")
    # end

  end

end #final