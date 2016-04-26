module FeatureHelpers

  def sign_up_with(email, username, password)
    visit root_path

    click_link "sign_up_nav_link"

    fill_in "user_email", with: email
    fill_in "user_username", with: username
    fill_in "user_password", with: password
    fill_in "user_password_confirmation", with: password
    click_button "new_user_registration_sign_up_submit"
    visit user_confirmation_path(:confirmation_token => User.last.confirmation_token)
    visit new_user_session_path
    fill_in "email_login_field", with: email
    fill_in "password_login_field", with: password
    click_button "log_in_submit_button"
    @email = email
    @current_user = User.find_by_email(email)
  end

  def sign_in_user(user)
    visit root_path
    click_link "sign_in_nav_link"
    fill_in "email_login_field", with: user.email
    find("#password_login_field")
    fill_in "password_login_field", with: user.password
    click_button "log_in_submit_button"
    @current_user = User.find_by_email(user.email)
  end

end