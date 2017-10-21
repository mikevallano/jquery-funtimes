class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :check_session_and_cookies

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
  end

  def check_session_and_cookies
    cookies.encrypted[:tester] = { value: 'taco' }
    cookies[:taco] = { value: 'sauce' }
    puts "session: #{session.values}"
    puts "cookies: #{cookies}"
  end
end
