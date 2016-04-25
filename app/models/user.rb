class User < ActiveRecord::Base

  before_save :default_username
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable




  def default_username
    if self.username == ""
      self.username = self.email[0..self.email.index("@")-1]
    end
  end

end
