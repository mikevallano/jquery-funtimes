module MailerHelpers

  def last_email
   ActionMailer::Base.deliveries.last
  end

  def reset_mailer
    ActionMailer::Base.deliveries = []
  end

end